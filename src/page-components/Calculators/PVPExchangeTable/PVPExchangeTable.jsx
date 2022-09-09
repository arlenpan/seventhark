import { Table } from 'antd';
import classNames from 'classnames';
import ItemIcon from 'src/components/ItemIcon';
import { ALL_MATERIALS } from 'src/data/economy';
import tierStyles from 'src/styles/tiers.module.scss';

export default function PVPExchangeTable({ costs, className }) {
    const PVP_EXCHANGE_MATERIALS = ALL_MATERIALS.filter((item) => item.pvpExchangeCost);

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
            title: 'Gold Value (AH)',
            dataIndex: 'goldCost',
            key: 'goldCost',
        },
        {
            title: 'Coin of Courage Cost',
            dataIndex: 'pvpExchangeCost',
            key: 'pvpExchangeCost',
        },
        {
            title: 'Gold Value per Coin',
            dataIndex: 'goldPerCoin',
            key: 'goldPerCoin',
            sorter: (a, b) => b.goldPerCoin - a.goldPerCoin,
        },
    ];

    const data = PVP_EXCHANGE_MATERIALS.map((item) => {
        const goldCost = costs[item.id] && costs[item.id];
        const goldPerCoin = goldCost / item.pvpExchangeCost;
        return {
            key: item.id,
            id: item.id,
            name: item.name,
            tier: item.tier,
            pvpExchangeCost: item.pvpExchangeCost,
            goldCost,
            goldPerCoin: !Number.isNaN(goldPerCoin) && Math.round(goldPerCoin * 1000) / 1000,
            imgUrl: item.imgUrl,
        };
    });

    return (
        <div className={className}>
            <Table columns={columns} dataSource={data} size="small" pagination={false} />
        </div>
    );
}
