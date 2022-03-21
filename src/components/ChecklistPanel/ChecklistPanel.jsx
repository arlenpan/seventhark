import { Checkbox, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getChecklist } from 'src/api/checklist';
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
            characters.forEach(
                (char) => (characterFields[char.name] = renderCharacterField(char, event)),
            );
            return { ...characterFields, ...baseFields };
        });
    };

    const renderCharacterField = (char, event) => {
        return (
            <div>
                {[...Array(event.quantity).keys()].map((i) => (
                    <Checkbox
                        key={i}
                        disabled={event.ilvl && char.ilvl < event.ilvl}
                        onClick={(e) => handleClickCheckbox(e, char, event)}
                    />
                ))}
            </div>
        );
    };

    const handleClickCheckbox = (e, character, event) => {
        const value = e.target.checked;
        onCheck({ value, character, event });
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
