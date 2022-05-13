import { Col, Input, List, Row, Select, Table } from 'antd';
import { useState } from 'react';
import costEntryStyles from 'src/components/Calculators/CostEntry/CostEntry.module.scss';
import ItemIcon from 'src/components/ItemIcon';
import { GOLD } from 'src/data/economy';

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

    return (
        <div className={className}>
            <span className="subtitle">
                This tool is for calculating break even on buying lower level gems.
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

            <span className="subtitle">Silver Reroll Cost: {REROLL_TABLE[level]}k</span>

            <List>
                {[...Array(level - 1).keys()].reverse().map((value) => {
                    const numGems = 3 ** (level - (value + 1));
                    return (
                        <List.Item>
                            You will need <strong>{numGems}</strong> Level {value + 1} gems, each at{' '}
                            {Math.round((cost / numGems) * 10) / 10} Gold.
                        </List.Item>
                    );
                })}
            </List>
        </div>
    );
}
