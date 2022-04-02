import { Checkbox, Table } from 'antd';
import NPCS from 'src/data/npc.json';
import { generateTableColumns } from 'src/lib/formUtils';

export default function RapportTable({ className, completed, onChange }) {
    const numCompleted = Object.values(completed).filter((i) => i).length;

    const columns = [
        {
            dataIndex: 'isRapportComplete',
            key: 'isRapportComplete',
            width: 25,
            render: (name, record) => (
                <Checkbox
                    className="ml-xs"
                    checked={record.isComplete}
                    onChange={(e) => onChange(e.target.checked, record)}
                />
            ),
            filters: [
                { text: 'Complete', value: true },
                { text: 'Incomplete', value: false },
            ],
            onFilter: (value, record) => record.isComplete === value,
            sorter: (a, b) => (a.isComplete ? -1 : 1),
        },
        {
            title: `Rapport NPC (${numCompleted}/${Object.values(NPCS).length})`,
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        ...generateTableColumns(
            [
                { key: 'continent', type: 'string' },
                { key: 'location', type: 'string' },
                { key: 'days_to_complete', type: 'number' },
                { key: 'song1', type: 'string' },
                { key: 'song2', type: 'string' },
                { key: 'emote1', type: 'string' },
                { key: 'emote2', type: 'string' },
                { key: 'preferred_gift', type: 'string' },
            ],
            NPCS
        ),
    ];

    const data = Object.keys(NPCS).map((name) => ({
        key: name,
        name,
        ...NPCS[name],
        isComplete: Boolean(completed[name]),
    }));

    return (
        <Table
            className={className}
            columns={columns}
            dataSource={data}
            size="small"
            pagination={false}
        />
    );
}
