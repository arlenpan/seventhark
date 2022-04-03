import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Checkbox, Table } from 'antd';
import NPCS from 'src/data/npc.json';
import { generateTableColumns } from 'src/lib/formUtils';
import formStyles from 'src/styles/forms.module.scss';

export default function RapportTable({ className, rapport = {}, onChange, onFavorite }) {
    const numCompleted = Object.values(rapport).filter((i) => i).length;

    const columns = [
        {
            dataIndex: 'isFavorite',
            key: 'isFavorite',
            width: 25,
            render: (name, record) => {
                return (
                    <Button
                        type="text"
                        shape="circle"
                        icon={
                            record.isFavorite ? (
                                <StarFilled className={formStyles['highlight-star']} />
                            ) : (
                                <StarOutlined />
                            )
                        }
                        onClick={(e) => onFavorite(!record.isFavorite, record)}
                    />
                );
            },
            filters: [
                { text: 'Favorite', value: true },
                { text: 'Not Favorite', value: false },
            ],
            onFilter: (value, record) => record.isFavorite === value,
            sorter: (a, b) => (a.isFavorite ? -1 : 1),
            defaultSortOrder: 'ascend',
        },
        {
            dataIndex: 'isComplete',
            key: 'isComplete',
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
        isComplete: rapport[name] && Boolean(rapport[name].isComplete),
        isFavorite: rapport[name] && Boolean(rapport[name].isFavorite),
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
