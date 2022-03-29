import { Checkbox, Table } from 'antd';
import ISLANDS from 'src/data/islands.json';
import formStyles from 'src/styles/forms.module.scss';

const BASE_URL = 'https://lost-ark.maxroll.gg/island/';

export default function IslandTable({ className, completed = {}, onChange }) {
    const numCompletedIslands = Object.values(completed).filter((i) => i).length;
    const numValidIslands = Object.values(ISLANDS).filter((i) => !i.noSoul).length;
    const acquisitionTypeFilters = Object.keys(
        Object.values(ISLANDS).reduce((agg, cur) => {
            if (cur.acquisition) return { ...agg, [cur.acquisition]: true };
            return agg;
        }, {})
    ).map((type) => ({ text: type, value: type }));

    const columns = [
        {
            dataIndex: 'soulCompleted',
            key: 'soulCompleted',
            width: 25,
            render: (name, record) => (
                <CheckboxCell
                    record={record}
                    onChange={(value) => onChange(value, record)}
                    checked={record.isComplete}
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
            title: `Island (${numCompletedIslands}/${numValidIslands})`,
            dataIndex: 'name',
            key: 'name',
            render: (name, record) => <NameCell name={name} record={record} />,
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Item Level',
            dataIndex: 'ilvl',
            key: 'ilvl',
            sorter: (a, b) => a.ilvl - b.ilvl,
        },
        {
            title: 'Acquisition Type',
            dataIndex: 'acquisition',
            key: 'acquisition',
            filters: acquisitionTypeFilters,
            onFilter: (value, record) => record.acquisition === value,
            sorter: (a, b) => a.acquisition?.localeCompare(b.acquisition),
        },
        {
            title: 'Adventure Island?',
            dataIndex: 'isAdventure',
            key: 'isAdventure',
            render: (name) => (
                <div className={name && formStyles['highlight-cell']}>
                    {name === true ? 'yes' : 'no'}
                </div>
            ),
            filters: [
                { text: 'yes', value: true },
                { text: 'no', value: false },
            ],
            onFilter: (value, record) => record.isAdventure === value,
            sorter: (a) => (a.isAdventure ? -1 : 1),
        },
    ];

    const data = Object.keys(ISLANDS).map((name) => ({
        name,
        ilvl: ISLANDS[name].ilvl,
        noSoul: ISLANDS[name].noSoul,
        acquisition: ISLANDS[name].acquisition || 'N/A',
        isAdventure: Boolean(ISLANDS[name].isAdventure),
        isComplete: Boolean(completed[name]),
    }));

    return (
        <div className={className}>
            <Table columns={columns} dataSource={data} size="small" pagination={false} />
        </div>
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

const CheckboxCell = ({ record, checked, onChange }) => {
    if (record.noSoul) return null;
    const handleChange = (e) => onChange(e.target.checked);
    return (
        <div>
            <Checkbox className="m-ls" checked={checked} onChange={handleChange} />
        </div>
    );
};
