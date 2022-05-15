import { Button, Checkbox, Modal, Table } from 'antd';
import { useState } from 'react';
import { GOLD_GENERATION } from 'src/data/events';
import { useRouter } from 'next/router';

export default function WeeklyGold({ characters = [], className }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [fieldsChecked, setFieldsChecked] = useState({});

    const router = useRouter();
    const { modifier } = router.query;

    const handleCheck = (e, eventId, characterId, index) => {
        const { checked } = e.target;
        const newFieldsChecked = { ...fieldsChecked };
        if (!newFieldsChecked[eventId]) newFieldsChecked[eventId] = {};
        if (!newFieldsChecked[eventId][characterId]) newFieldsChecked[eventId][characterId] = [];
        newFieldsChecked[eventId][characterId][index] = checked;
        setFieldsChecked(newFieldsChecked);
    };

    // kinda inefficient but w/e
    const calculateTotalValue = (characterId) => {
        const total = Object.keys(fieldsChecked).reduce((agg, eventKey) => {
            const checkedArray = fieldsChecked[eventKey][characterId];
            if (checkedArray) {
                const count = checkedArray.filter(Boolean).length;

                // get gold value
                const event = GOLD_GENERATION.find((e) => e.id === eventKey);
                return agg + (event.gold * count || 0);
            }
            return agg;
        }, 0);
        return total;
    };

    const calculateTotalRosterValue = () => {
        const totalRoster = [...characters, { name: 'roster' }].reduce((agg, char) => {
            return agg + calculateTotalValue(char.name);
        }, 0);
        return totalRoster;
    };

    const columns = [
        {
            title: 'Event',
            key: 'name',
            dataIndex: 'name',
            render: (value, { key, hideCheck }) => (hideCheck ? <strong>{value}</strong> : value),
        },
        ...characters.map((char) => ({
            title: `${char.name} (${char.ilvl})`,
            key: char.name,
            dataIndex: char.name,
            render: (value, { key, event, hideCheck }) => {
                if (!hideCheck && !event.rosterWide) {
                    const isIlvlBound = char.ilvl >= event.ilvlGoldCutoff || char.ilvl < event.ilvl;
                    const isSucceeded = fieldsChecked?.[event.hardMode]?.[char.name]?.[0];
                    const isPreceeded = fieldsChecked?.[event.normalMode]?.[char.name]?.[0];
                    return (
                        <Checkbox
                            checked={value && value[0]}
                            onChange={(e) => handleCheck(e, event.id, char.name, 0)}
                            disabled={isIlvlBound || isSucceeded || isPreceeded}
                        />
                    );
                }
                return value;
            },
        })),
        {
            title: 'Roster',
            key: 'roster',
            dataIndex: 'roster',
            render: (value, { key, event, hideCheck }) => {
                if (!hideCheck && event.rosterWide) {
                    return (
                        <div className="d-flex-center nowrap">
                            {[...Array(event.quantity).keys()].map((v, i) => (
                                <Checkbox
                                    key={i}
                                    checked={value && value[i]}
                                    onChange={(e) => handleCheck(e, event.id, 'roster', i)}
                                />
                            ))}
                        </div>
                    );
                }
                return value;
            },
        },
    ];

    const data = [
        ...GOLD_GENERATION.map((event) => ({
            key: event.id,
            name: event.name,
            event,
            ...characters.reduce(
                (obj, char) => ({ [char.name]: fieldsChecked[event.id]?.[char.name], ...obj }),
                {}
            ),
            roster: fieldsChecked[event.id]?.roster,
        })),
        {
            name: 'Total Weekly Gold per Character',
            key: 'total',
            hideCheck: true,
            ...characters.reduce(
                (obj, char) => ({ [char.name]: calculateTotalValue(char.name), ...obj }),
                {}
            ),
            roster: calculateTotalValue('roster'),
        },
        {
            name: 'Total Weekly Gold per Roster',
            key: 'totalRoster',
            hideCheck: true,
            roster: calculateTotalRosterValue(),
        },
    ];

    return (
        <>
            <Button
                size="small"
                className={className}
                onClick={() => router.push('/checklist/weeklygold', undefined, { shallow: true })}
            >
                Weekly Gold Generation
            </Button>
            <Modal
                title="Weekly Gold Generation"
                visible={modifier && modifier[0] === 'weeklygold'}
                onCancel={() => router.push('/checklist', undefined, { shallow: true })}
                footer={null}
                width={960}
            >
                <span className="subtitle">
                    This is the theoretical possible maximum of raw gold from running the following
                    events.
                    <ul>
                        <li>Assumes minimum gain (1000g) from large Una's token chests</li>
                        <li>Assumes that no dungeon chests are purchased</li>
                        <li>Does not include selling materials or accessories</li>
                    </ul>
                </span>
                <Table
                    size="small"
                    className="mb-xs"
                    pagination={false}
                    columns={columns}
                    dataSource={data}
                />
                <Button size="small" onClick={() => setFieldsChecked({})}>
                    Reset
                </Button>
            </Modal>
        </>
    );
}
