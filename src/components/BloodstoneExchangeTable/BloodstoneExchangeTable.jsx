import { Table } from 'antd';
import classNames from 'classnames';
import { ALL_MATERIALS } from 'src/data/economy';
import tierStyles from 'src/styles/tiers.module.scss';
import ItemIcon from '../ItemIcon';

export default function BloodstoneExchangeTable({ costs, className }) {
    const BLOODSTONE_EXCHANGE_MATERIALS = ALL_MATERIALS.filter((item) => item.bloodstoneCost);

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
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Gold Value (AH)',
            dataIndex: 'goldValue',
            key: 'goldValue',
        },
        {
            title: 'Sylmael Bloodstone Cost',
            dataIndex: 'bloodstoneCost',
            key: 'bloodstoneCost',
        },
        {
            title: 'Gold Value per Bloodstone',
            dataIndex: 'goldPerStone',
            key: 'goldPerStone',
            sorter: (a, b) => b.goldPerStone - a.goldPerStone,
        },
    ];

    const data = BLOODSTONE_EXCHANGE_MATERIALS.map((item) => {
        const goldValue = costs[item.id] && costs[item.id] * (item.bloodstoneQuantity || 1);
        const goldPerStone = goldValue / item.bloodstoneCost;
        return {
            key: item.id,
            id: item.id,
            name: item.name,
            tier: item.tier,
            quantity: item.bloodstoneQuantity || 1,
            bloodstoneCost: item.bloodstoneCost,
            goldValue,
            goldPerStone: !Number.isNaN(goldPerStone) && Math.round(goldPerStone * 1000) / 1000,
            imgUrl: item.imgUrl,
        };
    });

    return (
        <div className={className}>
            <Table columns={columns} dataSource={data} size="small" pagination={false} />
        </div>
    );
}
