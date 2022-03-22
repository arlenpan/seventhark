import { Button, Checkbox, Table } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import {
    getChecklist,
    resetChecklistDailies,
    resetChecklistWeeklies,
    setChecklistItem,
} from 'src/api/checklist';
import { DAILIES, WEEKLIES } from 'src/data/events';
import styles from './Checklist.module.scss';

export default function ChecklistPanel({ characters }) {
    const [checklist, setChecklist] = useState({});

    useEffect(() => {
        getChecklist().then(setChecklist);
    }, []);

    const checkboxColumns = characters.map((char) => ({
        title: char.name,
        dataIndex: char.name,
        key: char.name,
        width: '80px',
    }));
    const columns = [...checkboxColumns, { title: 'Event', dataIndex: 'event', key: 'event' }];

    const buildTableData = (events) => {
        return events.map((event) => {
            const baseFields = { event: renderEventField(event), key: event.id };
            const characterFields = {};
            characters.forEach((char) => {
                return (characterFields[char.name] = renderCharacterField(char, event));
            });
            return { ...characterFields, ...baseFields };
        });
    };

    const renderEventField = (event) => {
        return <div className={classNames(styles.cell)}>{event.name}</div>;
    };

    const renderCharacterField = (char, event) => {
        const charEvent = checklist && checklist[char.name] && checklist[char.name][event.id];
        const isComplete = charEvent && charEvent.length === event.quantity;
        return (
            <div className={classNames(isComplete && styles.complete, styles.cell)}>
                {[...Array(event.quantity).keys()].map((v, i) => (
                    <Checkbox
                        key={i}
                        disabled={event.ilvl && char.ilvl < event.ilvl}
                        checked={charEvent && charEvent.find((index) => index === i) !== undefined}
                        onClick={(e) => handleClickCheckbox(e, i, char, event)}
                    />
                ))}
            </div>
        );
    };

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
            <div className="d-flex-center">
                <h3>Dailies</h3>
                <Button size="small" className="m-lxs" onClick={() => handleReset('daily')}>
                    Reset
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={buildTableData(DAILIES)}
                size="small"
                pagination={false}
            />
            <div className="d-flex-center m-ts">
                <h3>Weeklies</h3>
                <Button size="small" className="m-lxs" onClick={() => handleReset('weekly')}>
                    Reset
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={buildTableData(WEEKLIES)}
                size="small"
                pagination={false}
            />
        </div>
    );
}
