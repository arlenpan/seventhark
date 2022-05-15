import { Button, Checkbox, Table } from 'antd';
import { useEffect, useState } from 'react';
import {
    getChecklist,
    resetChecklistDailies,
    resetChecklistWeeklies,
    setChecklistItem,
} from 'src/api/checklist';
import { DAILIES, WEEKLIES } from 'src/data/events';
import formStyles from 'src/styles/forms.module.scss';
import WeeklyGold from '../WeeklyGold';
import styles from './ChecklistTables.module.scss';

export default function ChecklistTables({ characters }) {
    const [checklist, setChecklist] = useState({});

    useEffect(() => {
        getChecklist().then(setChecklist);
    }, []);

    // BUILD COLUMNS
    const checkboxColumns = characters.map((char) => ({
        title: char.name,
        dataIndex: char.name,
        key: char.name,
        width: '80px',
        render: (item, record) => renderCharacterEventField(char, record.event),
        onCell: (record) => renderCharacterEventFieldClassName(char, record.event),
    }));
    const columns = [...checkboxColumns, { title: 'Event', dataIndex: 'name', key: 'name' }];

    // BUILD DATA
    const buildEventTableData = (events) => {
        return events.map((event) => {
            const characterFields = {};
            characters.forEach((char) => {
                characterFields[char.name] = checklist[char.name] && checklist[char.name][event.id];
            });
            return { ...characterFields, event, key: event.id, name: event.name };
        });
    };

    // RENDER STUFF
    const renderCharacterEventField = (char, event) => {
        const charEvent = checklist && checklist[char.name] && checklist[char.name][event.id];
        const charTooLowLevel = event.ilvl && char.ilvl && char.ilvl < event.ilvl;
        const rosterComplete =
            event.rosterWide &&
            Object.entries(checklist).find(([name, checks]) => {
                return name !== char.name && checks[event.id] && checks[event.id].length > 0;
            });

        return (
            <div className={styles.cell}>
                {[...Array(event.quantity).keys()].map((v, i) => (
                    <Checkbox
                        key={i}
                        disabled={charTooLowLevel || rosterComplete}
                        checked={charEvent && charEvent.find((index) => index === i) !== undefined}
                        onClick={(e) => handleClickCheckbox(e, i, char, event)}
                    />
                ))}
            </div>
        );
    };

    const renderCharacterEventFieldClassName = (char, event) => {
        const charEvent = checklist && checklist[char.name] && checklist[char.name][event.id];
        const isComplete = charEvent && charEvent.length === event.quantity;
        return { className: isComplete && formStyles['highlight-cell'] };
    };

    // HANDLERS
    const handleClickCheckbox = (e, index, character, event) => {
        const value = e.target.checked;
        setChecklistItem({ value, index, character, event });
        getChecklist().then(setChecklist);
    };

    const handleReset = (type) => {
        if (type === 'daily') resetChecklistDailies();
        if (type === 'weekly') resetChecklistWeeklies();
        getChecklist().then(setChecklist);
    };

    return (
        <section className={styles.checklists}>
            <div className="d-flex-center mb-xs">
                <h3>Dailies</h3>
                <Button size="small" className="ml-xs" onClick={() => handleReset('daily')}>
                    Reset
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={buildEventTableData(DAILIES)}
                size="small"
                pagination={false}
            />

            <div className="d-flex-center justify-between mt-s mb-xs">
                <div className="d-flex-center">
                    <h3>Weeklies</h3>
                    <Button size="small" className="ml-xs" onClick={() => handleReset('weekly')}>
                        Reset
                    </Button>
                </div>
                {characters.length > 0 && <WeeklyGold characters={characters} />}
            </div>
            <Table
                columns={columns}
                dataSource={buildEventTableData(WEEKLIES)}
                size="small"
                pagination={false}
            />
        </section>
    );
}
