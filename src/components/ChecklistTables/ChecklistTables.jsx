import { Button, Checkbox, Table } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import {
    getChecklist,
    resetChecklistDailies,
    resetChecklistWeeklies,
    setChecklistItem
} from 'src/api/checklist';
import { DAILIES, WEEKLIES } from 'src/data/events';
import formStyles from 'src/styles/forms.module.scss';
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
    }));
    const columns = [...checkboxColumns, { title: 'Event', dataIndex: 'event', key: 'event' }];
    const rapportColumns = [...checkboxColumns, { title: 'NPC', dataIndex: 'npc', key: 'npc' }];

    // BUILD DATA
    const buildEventTableData = (events) => {
        return events.map((event) => {
            const baseFields = { event: renderEventField(event), key: event.id };
            const characterFields = {};
            characters.forEach((char) => {
                characterFields[char.name] = renderCharacterEventField(char, event);
            });
            return { ...characterFields, ...baseFields };
        });
    };

    const buildRapportTableData = () => {
        return [...Array(12).keys()].map((index) => {
            const name = index < 6 ? 'Song' : 'Emote';
            const baseFields = {
                npc: `${name} ${(index % 6) + 1} ${
                    (index + 1) % 6 === 0 ? '(Crystalline Aura)' : ''
                }`,
                key: index,
            };
            const characterFields = {};
            characters.forEach((char) => {
                characterFields[char.name] = renderCharacterRapportField(char);
            });
            return { ...characterFields, ...baseFields };
        });
    };

    // RENDER STUFF
    const renderEventField = (event) => {
        return <div className={classNames(styles.cell)}>{event.name}</div>;
    };

    const renderCharacterEventField = (char, event) => {
        const charEvent = checklist && checklist[char.name] && checklist[char.name][event.id];
        const isComplete = charEvent && charEvent.length === event.quantity;
        const charTooLowLevel = event.ilvl && char.ilvl && char.ilvl < event.ilvl;
        const rosterComplete =
            event.rosterWide &&
            Object.entries(checklist).find(([name, checks]) => {
                return name !== char.name && checks[event.id] && checks[event.id].length > 0;
            });

        return (
            <div className={classNames(isComplete && formStyles['highlight-cell'], styles.cell)}>
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

    const renderCharacterRapportField = (char) => {
        return (
            <div className={classNames(styles.cell)}>
                <Checkbox onClick={(e) => {}} />
            </div>
        );
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
        <div className={styles.checklist}>
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

            {/* <div className="d-flex-center mt-s">
                <h3>Rapport Dailies</h3>
            </div>
            <Table
                columns={rapportColumns}
                dataSource={buildRapportTableData()}
                size="small"
                pagination={false}
            /> */}

            <div className="d-flex-center mt-s mb-xs">
                <h3>Weeklies</h3>
                <Button size="small" className="ml-xs" onClick={() => handleReset('weekly')}>
                    Reset
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={buildEventTableData(WEEKLIES)}
                size="small"
                pagination={false}
            />
        </div>
    );
}
