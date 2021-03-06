import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Checkbox, Table } from 'antd';
import ISLANDS from 'src/data/islands.json';
import { generateTableColumns } from 'src/lib/formUtils';
import formStyles from 'src/styles/forms.module.scss';

const BASE_URL = 'https://lost-ark.maxroll.gg/island/';

export default function IslandTable({ className, islands = {}, onChange, onFavorite }) {
    const numCompletedIslands = Object.values(islands).filter((i) => i).length;
    const numValidIslands = Object.values(ISLANDS).filter((i) => !i.noSoul).length;

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
        },
        {
            dataIndex: 'isComplete',
            key: 'isComplete',
            width: 25,
            render: (name, record) => {
                return (
                    !record.noSoul && (
                        <Checkbox
                            className="ml-xs"
                            checked={record.isComplete}
                            onChange={(e) => onChange(e.target.checked, record)}
                        />
                    )
                );
            },
            filters: [
                { text: 'Complete', value: true },
                { text: 'Incomplete', value: false },
            ],
            onFilter: (value, record) => record.isComplete === value,
            sorter: (a, b) => (a.isComplete ? -1 : 1),
        },
        {
            title: `Island (${numCompletedIslands}/${numValidIslands})`,
            dataIndex: 'name',
            key: 'name',
            render: (name, record) => <NameCell name={name} record={record} />,
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        ...generateTableColumns(
            [
                { key: 'ilvl', type: 'number' },
                { key: 'acquisition', type: 'string' },
            ],
            ISLANDS
        ),
        {
            title: 'Adventure Island?',
            dataIndex: 'isAdventure',
            key: 'isAdventure',
            render: (name) => <div>{name === true ? 'yes' : 'no'}</div>,
            filters: [
                { text: 'yes', value: true },
                { text: 'no', value: false },
            ],
            onFilter: (value, record) => record.isAdventure === value,
            sorter: (a) => (a.isAdventure ? -1 : 1),
        },
    ];

    const data = Object.keys(ISLANDS).map((name) => ({
        key: name,
        name,
        ilvl: ISLANDS[name].ilvl,
        noSoul: ISLANDS[name].noSoul,
        acquisition: ISLANDS[name].acquisition || '',
        isAdventure: Boolean(ISLANDS[name].isAdventure),
        isComplete: islands[name] && Boolean(islands[name].isComplete),
        isFavorite: islands[name] && Boolean(islands[name].isFavorite),
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

const NameCell = ({ name, record }) => {
    const url = BASE_URL + name.toLowerCase().split(' ').join('-');
    return (
        <div>
            <a href={url} rel="noreferrer" target="_blank">
                {name}
            </a>
        </div>
    );
};
