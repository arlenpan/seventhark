import { Button, Select, Table } from 'antd';
import { useState } from 'react';
import classes from 'src/data/classes.json';
import { capitalize } from 'src/lib/string';

export default function EngravingEditor({ preset }) {
    const [engravings, setEngravings] = useState([]);

    const CLASS_ENGRAVINGS = preset.class
        ? classes[preset.class].engravings
        : Object.keys(classes).reduce((acc, key) => [...acc, ...classes[key].engravings], []);

    console.log(CLASS_ENGRAVINGS);

    const handleAddEngraving = () => {
        setEngravings([...engravings, { key: 'choose' }]);
    };

    const handleSelectEngraving = (value, index) => {
        const newEngravings = [...engravings];
        newEngravings[index] = { ...newEngravings[index], engraving: value, key: value };
        setEngravings(newEngravings);
    };

    const handleDeleteEngraving = (index) => {};

    const columns = [
        {
            title: 'Engraving',
            dataIndex: 'engraving',
            render: (value, record, index) => (
                <TableEngravingCell
                    value={value}
                    record={record}
                    index={index}
                    onAdd={handleAddEngraving}
                    onSelect={handleSelectEngraving}
                    engravings={CLASS_ENGRAVINGS}
                />
            ),
        },
        { title: 'Books', dataIndex: 'books' },
        { title: 'Necklace', dataIndex: 'necklace' },
        { title: 'Earring', dataIndex: 'ear1' },
        { title: 'Earring', dataIndex: 'ear2' },
        { title: 'Stone', dataIndex: 'stone' },
        { title: 'Total', dataIndex: 'total' },
    ];

    const supplementedData = [...engravings, { key: 'add' }];

    return (
        <section>
            <div className="d-flex-center mb-xs">
                <h3>{preset.name}</h3>
            </div>
            <Table
                className="mr-s"
                size="small"
                columns={columns}
                dataSource={supplementedData}
                pagination={false}
            />
        </section>
    );
}

export const TableEngravingCell = ({ value, record, index, onAdd, onSelect, engravings }) => {
    if (record.key === 'add') {
        return (
            <Button type="secondary" size="small" onClick={onAdd}>
                Add Engraving
            </Button>
        );
    }
    if (record.key === 'choose') {
        return (
            <Select
                size="small"
                placeholder="Choose Engraving"
                onChange={(v) => onSelect(v, index)}
                showSearch
                style={{ minWidth: 150 }}
            >
                {engravings.map((engraving) => (
                    <Select.Option value={engraving}>{capitalize(engraving)}</Select.Option>
                ))}
            </Select>
        );
    }
    return capitalize(value);
};
