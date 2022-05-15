import { Table } from 'antd';
import classNames from 'classnames';
import ItemIcon from 'src/components/ItemIcon';
import { ALL_MATERIALS, CRYSTALS } from 'src/data/economy';
import formStyles from 'src/styles/forms.module.scss';
import tierStyles from 'src/styles/tiers.module.scss';

export default function MariShopTable({ costs, tiers, className }) {
    const renderNameCell = (name, record) => {
        return (
            <div
                className={classNames(
                    record.tier === 1 && tierStyles.tier1,
                    record.tier === 2 && tierStyles.tier2,
                    record.tier === 3 && tierStyles.tier3,
                    record.tier === 3.5 && tierStyles['tier3-5']
                )}
            >
                {name}
            </div>
        );
    };

    const renderValueCell = (item, cellType) => {
        if (cellType === 'ah' && !item.goldValueAH) return null;
        if (cellType === 'mari' && !item.goldValueMari) return null;
        return (
            <div>
                {cellType === 'ah' && item.goldValueAH}
                {cellType === 'mari' && item.goldValueMari}
            </div>
        );
    };

    const getValueCellClassname = (item, cellType) => {
        const isCheaper =
            (cellType === 'ah' && item.goldValueAH < item.goldValueMari) ||
            (cellType === 'mari' && item.goldValueMari < item.goldValueAH);
        if (cellType === 'ah' && !item.goldValueAH) return {};
        if (cellType === 'mari' && !item.goldValueMari) return {};
        return { className: isCheaper && formStyles['highlight-cell'] };
    };

    const columns = [
        {
            dataIndex: 'icon',
            key: 'icon',
            render: (name, record) => <ItemIcon item={record} tooltipPlacement="right" />,
            width: 50,
        },
        {
            title: 'Item',
            dataIndex: 'name',
            key: 'name',
            render: (name, record) => renderNameCell(name, record),
        },
        { title: 'Gold Cost (AH)', dataIndex: 'goldCost', key: 'goldCost' },
        { title: 'Quantity (Mari)', dataIndex: 'quantity', key: 'quantity' },
        { title: 'Gem Cost (Mari)', dataIndex: 'gemCost', key: 'gemCost' },
        {
            title: 'Total Gold Cost (AH)',
            dataIndex: 'goldValueAH',
            key: 'goldValueAH',
            render: (value, record) => renderValueCell(record, 'ah'),
            onCell: (record) => getValueCellClassname(record, 'ah'),
        },
        {
            title: 'Total Gold Cost (Mari)',
            dataIndex: 'goldValueMari',
            key: 'goldValueMari',
            render: (value, record) => renderValueCell(record, 'mari'),
            onCell: (record) => getValueCellClassname(record, 'mari'),
        },
        {
            title: 'Gold Difference',
            dataIndex: 'goldDiff',
            key: 'goldDiff',
            sorter: (a, b) => a.goldDiff - b.goldDiff,
        },
    ];

    const data = ALL_MATERIALS.filter(
        (item) => tiers[Math.floor(item.tier)] && item.mariQuantity
    ).map((item) => {
        const goldValueAH = item.mariQuantity * costs[item.id];
        const goldDiff = Math.round(
            item.mariQuantity * costs[item.id] -
                (costs[CRYSTALS.id] / CRYSTALS.purchaseUnit) * item.mariGemCost
        );

        return {
            key: item.id,
            name: item.name,
            goldCost: costs[item.id],
            quantity: item.mariQuantity,
            gemCost: item.mariGemCost,
            goldValueAH: !Number.isNaN(goldValueAH) && goldValueAH,
            goldValueMari:
                costs[CRYSTALS.id] &&
                Math.round((costs[CRYSTALS.id] / CRYSTALS.purchaseUnit) * item.mariGemCost),
            goldDiff: !Number.isNaN(goldDiff) && goldDiff,
            tier: item.tier,
            imgUrl: item.imgUrl,
        };
    });

    return (
        <div className={className}>
            <Table columns={columns} dataSource={data} size="small" pagination={false} />
        </div>
    );
}
