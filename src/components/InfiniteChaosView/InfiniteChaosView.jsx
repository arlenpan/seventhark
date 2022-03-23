import { Table } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { ALL_MATERIALS } from 'src/data/economy';
import tierStyles from 'src/styles/tiers.module.scss';
import FormEditableCell from '../FormEditableCell';
import styles from './InfiniteChaos.module.scss';

export default function InfiniteChaosView({ costs, className }) {
    const INFINITE_CHAOS_MATERIALS = ALL_MATERIALS.filter((item) => item.exchangeCurve);

    const [tempValues, setTempValues] = useState({});

    const handleFieldChange = (value, record) => {
        const newTempValues = { ...tempValues };
        newTempValues[record.id] = value;
        setTempValues(newTempValues);
    };

    console.log(tempValues);

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

    const calculateBestItem = () => {
        const bestItem = { itemId: null, value: null };
        INFINITE_CHAOS_MATERIALS.forEach((item) => {
            const purificationCost = tempValues[item.id] || item.exchangeCurve[0];
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
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
            render: (name, record) => renderNameCell(name, record),
        },
        // {
        //     title: 'Number to Buy',
        //     dataIndex: 'buyCount',
        //     key: 'buyCount',
        //     editable: true,
        // },
        {
            title: 'Purification Shard Cost',
            dataIndex: 'purificationCost',
            key: 'purificationCost',
            render: (value, record) => (
                <FormEditableCell value={value} record={record} onChange={handleFieldChange} />
            ),
        },
        {
            title: 'Gold Cost (AH)',
            dataIndex: 'goldCost',
            key: 'goldCost',
        },
        {
            title: 'Gold Value per Shard',
            dataIndex: 'goldPerShard',
            key: 'goldPerShard',
        },
    ];

    const data = INFINITE_CHAOS_MATERIALS.map((item) => {
        const purificationCost = tempValues[item.id] || item.exchangeCurve[0];
        const goldPerShard = costs[item.id] / purificationCost;
        return {
            item: item.name,
            tier: item.tier,
            id: item.id,
            goldCost: costs[item.id],
            purificationCost,
            goldPerShard: !Number.isNaN(goldPerShard) && Math.round(goldPerShard * 1000) / 1000,
            exchangeCurve: item.exchangeCurve,
        };
    });

    const bestItemId = calculateBestItem();

    return (
        <div className={className}>
            <Table
                rowClassName={(record) => record.id === bestItemId && styles.best}
                columns={columns}
                dataSource={data}
                size="small"
                pagination={false}
            />
        </div>
    );
}
