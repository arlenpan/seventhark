import { Button, Checkbox, Form, Input, Modal, Table, Tag } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getChecklistCustomEvents, getChecklistHiddenEvents } from 'src/api/checklist';
import { ABYSSALS, DAILIES, TYPE_DAILY, TYPE_WEEKLY, WEEKLIES } from 'src/data/events';
import formStyles from 'src/styles/forms.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default function CustomizeEventsModal({ onClose, onSubmit }) {
    const [showCustomForm, setCustomForm] = useState(false);
    const [customEvents, setCustomEvents] = useState(null);
    const [hiddenEvents, setHiddenEvents] = useState(null);

    useEffect(() => {
        getChecklistCustomEvents().then(setCustomEvents);
        getChecklistHiddenEvents().then(setHiddenEvents);
    }, []);

    const columns = [
        {
            key: 'quantity',
            title: 'Quantity',
            dataIndex: 'quantity',
            width: 75,
        },
        {
            key: 'name',
            title: 'Name',
            dataIndex: 'name',
            render: (value, record) => {
                return (
                    <div className="d-flex-center justify-between w-100">
                        <span>
                            {value} {record.isNew && <Tag color="volcano">NEW</Tag>}
                        </span>
                        {record.isCustom && (
                            <Button
                                type="link"
                                size="small"
                                onClick={() => handleRemoveCustom(record)}
                            >
                                Remove
                            </Button>
                        )}
                    </div>
                );
            },
        },
        {
            key: 'isHidden',
            title: 'Hide',
            dataIndex: 'isHidden',
            width: 75,
            render: (value, record) => {
                if (record.id) {
                    return (
                        <Checkbox checked={value} onChange={(e) => handleToggleHide(e, record)} />
                    );
                }
            },
        },
    ];

    const generateData = (eventList, type) => {
        const filteredEvents = eventList.filter((event, index) => {
            const i = eventList.findIndex((e) => e.combinedName === event.combinedName);
            return i === 0 || i === index;
        });
        const newEvents =
            customEvents && Object.values(customEvents).filter((event) => event.type === type);
        const combinedEvents = customEvents ? filteredEvents.concat(newEvents) : filteredEvents;
        return [
            ...combinedEvents.map((event) => ({
                key: event.id,
                ...event,
                isHidden: hiddenEvents?.[event.id],
                name: event.combinedName || event.name,
            })),
            {
                name: renderCreateRow(type),
            },
        ];
    };

    const renderCreateRow = (type) => {
        if (showCustomForm === type) {
            return (
                <Form
                    onFinish={(data) => handleCreateCustom({ ...data, type })}
                    className={classNames(formStyles['input-panel'], 'mt-s mb-s')}
                >
                    <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                        <Input autoFocus />
                    </Form.Item>
                    <Form.Item label="Quantity" name="quantity" rules={[{ required: true }]}>
                        <Input type="number" />
                    </Form.Item>
                    <div className="d-flex-center">
                        <Button onClick={() => setCustomForm(false)}>Cancel</Button>
                        <Button className="ml-auto" htmlType="submit" type="primary">
                            Add
                        </Button>
                    </div>
                </Form>
            );
        }

        return (
            <Button
                type="link"
                size="small"
                className="p-0 capitalize"
                onClick={() => setCustomForm(type)}
            >
                Add Custom {type}
            </Button>
        );
    };

    const handleCreateCustom = ({ name, quantity, type }) => {
        const newCustomEvents = { ...customEvents };

        const newEvent = {
            id: `${name.toLowerCase().replace(' ', '_')}_${uuidv4()}`,
            name,
            quantity,
            type,
            isCustom: true,
            isNew: true,
        };

        newCustomEvents[newEvent.id] = newEvent;
        setCustomEvents(newCustomEvents);
        setCustomForm(false);
    };

    const handleToggleHide = (e, record) => {
        const newHiddenEvents = { ...hiddenEvents };
        newHiddenEvents[record.id] = e.target.checked;
        setHiddenEvents(newHiddenEvents);
    };

    const handleRemoveCustom = (event) => {
        const newCustomEvents = { ...customEvents };
        delete newCustomEvents[event.id];
        setCustomEvents(newCustomEvents);
    };

    const transformSubmit = (values) => {
        const newValues = { ...values };
        Object.keys(newValues).forEach((key) => {
            delete newValues[key].isNew;
        });
        return newValues;
    };

    const handleSubmit = () => {
        onSubmit(transformSubmit(customEvents), hiddenEvents);
    };

    return (
        <Modal
            title="Customize Events"
            open
            onCancel={onClose}
            okText="Save"
            onOk={handleSubmit}
        >
            <h3>Dailies</h3>
            <Table
                size="small"
                pagination={false}
                columns={columns}
                dataSource={generateData(DAILIES, TYPE_DAILY)}
            />

            <h3 className="mt-s">Weeklies</h3>
            <Table
                size="small"
                pagination={false}
                columns={columns}
                dataSource={generateData([...WEEKLIES, ...ABYSSALS], TYPE_WEEKLY)}
            />
        </Modal>
    );
}
