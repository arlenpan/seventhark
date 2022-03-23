import { Table } from 'antd';
import classNames from 'classnames';
import { ALL_MATERIALS, CRYSTALS } from 'src/data/economy';
import tierStyles from 'src/styles/tiers.module.scss';
import styles from './MariShopView.module.scss';

export default function MariShopView({ costs, tiers, className }) {
    const renderNameCell = (name, record) => {
        return (
            <div
                className={classNames(
                    record.tier === 1 && tierStyles.tier1,
                    record.tier === 2 && tierStyles.tier2,
                    record.tier === 3 && tierStyles.tier3
                )}
            >
                {name}
            </div>
        );
    };

    const renderValueCell = (item, cellType) => {
        const isCheaper =
            (cellType === 'ah' && item.goldValueAH < item.goldValueMari) ||
            (cellType === 'mari' && item.goldValueMari < item.goldValueAH);
        const isNaN =
            (cellType === 'ah' && Number.isNaN(item.goldValueAH)) ||
            (cellType === 'mari' && Number.isNaN(item.goldValueMari));
        return (
            <div className={classNames(isCheaper && styles.cheaper, isNaN && 'faded')}>
                {cellType === 'ah' && item.goldValueAH}
                {cellType === 'mari' && item.goldValueMari}
            </div>
        );
    };

    const columns = [
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
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
        },
        {
            title: 'Total Gold Cost (Mari)',
            dataIndex: 'goldValueMari',
            key: 'goldValueMari',
            render: (value, record) => renderValueCell(record, 'mari'),
        },
        { title: 'Gold Difference', dataIndex: 'goldDiff', key: 'goldDiff' },
    ];

    const data = ALL_MATERIALS.filter((item) => tiers[item.tier] && item.quantityMari).map(
        (item) => {
            const goldValueAH = item.quantityMari * costs[item.id];
            const goldDiff = Math.round(
                item.quantityMari * costs[item.id] - (costs[CRYSTALS.id] / 95) * item.gemCostMari
            );

            return {
                item: item.name,
                goldCost: costs[item.id],
                quantity: item.quantityMari,
                gemCost: item.gemCostMari,
                goldValueAH: !Number.isNaN(goldValueAH) && goldValueAH,
                goldValueMari: Math.round((costs[CRYSTALS.id] / 95) * item.gemCostMari),
                goldDiff: !Number.isNaN(goldDiff) && goldDiff,
                tier: item.tier,
            };
        }
    );

    return (
        <div className={className}>
            <Table columns={columns} dataSource={data} size="small" pagination={false} />
        </div>
    );
}
