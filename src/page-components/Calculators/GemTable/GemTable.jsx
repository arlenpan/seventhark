import { Col, Input, Row, Select, Table } from 'antd';
import { useState } from 'react';
import ItemIcon from 'src/components/ItemIcon';
import { GOLD } from 'src/data/economy';
import costEntryStyles from '../CostEntry/CostEntry.module.scss';

const REROLL_TABLE = {
    1: 7,
    2: 8.5,
    3: 10,
    4: 20,
    5: 30,
    6: 60,
    7: 90,
    8: 150,
    9: 210,
    10: 340,
};

export default function GemTable({ className }) {
    const [cost, setCost] = useState(0);
    const [level, setLevel] = useState(10);

    const handleChangeCost = (e) => {
        const { value } = e.target;
        setCost(value);
    };

    const handleChangeLevel = (value) => setLevel(value);

    const columns = [
        {
            render: () => 'You will need',
            width: 100,
        },
        {
            title: 'Quantity',
            key: 'quantity',
            dataIndex: 'quantity',
            width: 100,
        },
        {
            title: 'Gem',
            key: 'level',
            dataIndex: 'level',
            render: (value) => `Level ${value} gems.`,
            width: 100,
        },
        {
            title: 'Gold Per Gem',
            key: 'goldPerGem',
            dataIndex: 'goldPerGem',
            render: (value) => Math.round(value * 10) / 10,
            width: 150,
        },
        {
            title: 'Gold Per Gem (Post Tax)',
            key: 'goldPerGemPostTax',
            dataIndex: 'goldPerGemPostTax',
            render: (value) => Math.round(value * 10) / 10,
        },
    ];
    const data = [...Array(level - 1).keys()].reverse().map((value) => {
        const actualLevel = value + 1;
        const quantity = 3 ** (level - (value + 1));
        const goldPerGem = cost / quantity;
        const costPostTax = Math.floor(cost * 0.95);
        const goldPerGemPostTax = costPostTax / quantity;

        return {
            level: actualLevel,
            quantity,
            goldPerGem,
            goldPerGemPostTax,
        };
    });

    return (
        <div className={className}>
            <span className="subtitle">
                This tool is to help calculate breakeven on flipping gems.
            </span>
            <Row>
                <Col xs={24} md={5}>
                    <div className={costEntryStyles['input-wrapper']}>
                        <span className="mr-xs ml-xs">Gem Level:</span>
                        <Select value={level} className="w-100" onChange={handleChangeLevel}>
                            {[...Array(10).keys()].reverse().map((value) => (
                                <Select.Option value={value + 1}>{value + 1}</Select.Option>
                            ))}
                        </Select>
                    </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 8, offset: 1 }}>
                    <div className={costEntryStyles['input-wrapper']}>
                        <span className="mr-xs ml-xs">Level {level} Gem Cost:</span>
                        <Input value={cost} onChange={handleChangeCost} type="number" />
                        <ItemIcon item={GOLD} className="ml-xs" />
                    </div>
                </Col>
            </Row>

            <span className="subtitle">Silver Reroll Cost: {REROLL_TABLE[level]}k. </span>
            <span className="subtitle">
                Selling this gem will net {Math.floor(cost * 0.95)}g post tax.
            </span>

            <Table size="small" pagination={false} columns={columns} dataSource={data} />
        </div>
    );
}
