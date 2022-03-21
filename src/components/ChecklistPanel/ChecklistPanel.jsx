import { Checkbox, Table } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getChecklist, setChecklistItem } from 'src/api/checklist';
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
            const baseFields = { event: event.name, key: event.id };
            const characterFields = {};
            characters.forEach((char) => {
                return (characterFields[char.name] = renderCharacterField(char, event));
            });
            return { ...characterFields, ...baseFields };
        });
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

    return (
        <div className={styles.checklist}>
            <h3>Dailies</h3>
            <Table
                columns={columns}
                dataSource={buildTableData(DAILIES)}
                size="small"
                pagination={false}
            />
            <h3 className="m-ts">Weeklies</h3>
            <Table
                columns={columns}
                dataSource={buildTableData(WEEKLIES)}
                size="small"
                pagination={false}
            />
        </div>
    );
}
