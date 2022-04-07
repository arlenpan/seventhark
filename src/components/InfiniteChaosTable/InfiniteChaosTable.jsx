import { Table } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { ALL_MATERIALS } from 'src/data/economy';
import formStyles from 'src/styles/forms.module.scss';
import tierStyles from 'src/styles/tiers.module.scss';
import FormEditableCell from '../FormEditableCell';
import ItemIcon from '../ItemIcon';

export default function InfiniteChaosTable({ costs, className }) {
    const INFINITE_CHAOS_MATERIALS = ALL_MATERIALS.filter((item) => item.chaosExchangeCost);

    const [tempValues, setTempValues] = useState({});
    const [tempQuantities, setTempQuantities] = useState({});

    const handleQuantityChange = (value, record) => {
        const newQuantities = { ...tempQuantities };
        newQuantities[record.id] = value;
        setTempQuantities(newQuantities);
    };

    const handleCostChange = (value, record) => {
        const newTempValues = { ...tempValues };
        newTempValues[record.id] = value;
        setTempValues(newTempValues);
    };

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

    const calculateBestItem = () => {
        const bestItem = { itemId: null, value: null };
        INFINITE_CHAOS_MATERIALS.forEach((item) => {
            const purificationCost = tempValues[item.id] || item.chaosExchangeCost[0];
            const goldPerShard = costs[item.id] / purificationCost;
            if (!Number.isNaN(goldPerShard)) {
                if (!bestItem.itemId || goldPerShard > bestItem.value) {
                    bestItem.itemId = item.id;
                    bestItem.value = goldPerShard;
                }
            }
        });
        return bestItem.itemId;
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
            title: 'Buy Count',
            dataIndex: 'buyCount',
            key: 'buyCount',
            render: (value, record) => (
                <FormEditableCell value={value} record={record} onChange={handleQuantityChange} />
            ),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Purification Shard Cost',
            dataIndex: 'purificationCost',
            key: 'purificationCost',
            render: (value, record) => (
                <FormEditableCell value={value} record={record} onChange={handleCostChange} />
            ),
        },
        {
            title: 'Gold Value (AH)',
            dataIndex: 'goldCost',
            key: 'goldCost',
        },
        {
            title: 'Gold Value per Shard',
            dataIndex: 'goldPerShard',
            key: 'goldPerShard',
            sorter: (a, b) => b.goldPerShard - a.goldPerShard,
        },
    ];

    const data = INFINITE_CHAOS_MATERIALS.map((item) => {
        const buyCount = tempQuantities[item.id] || 1;
        const quantity = item.chaosExchangeQuantity || 1;
        const purificationCost = tempValues[item.id] || item.chaosExchangeCost[0];
        const goldCost = costs[item.id] && costs[item.id] * buyCount * quantity;
        const goldPerShard = goldCost / purificationCost;
        return {
            key: item.id,
            id: item.id,
            name: item.name,
            tier: item.tier,
            chaosExchangeCost: item.chaosExchangeCost,
            buyCount,
            quantity,
            purificationCost,
            goldCost,
            goldPerShard: !Number.isNaN(goldPerShard) && Math.round(goldPerShard * 1000) / 1000,
            imgUrl: item.imgUrl,
        };
    });

    return (
        <div className={className}>
            <Table
                rowClassName={(record) => {
                    return (
                        record.goldCost &&
                        record.id === calculateBestItem() &&
                        formStyles['highlight-cell']
                    );
                }}
                columns={columns}
                dataSource={data}
                size="small"
                pagination={false}
            />
        </div>
    );
}
