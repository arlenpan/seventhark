import { Button, Form, Input } from 'antd';

export default function CreateCharacterForm({ onSubmit }) {
    return (
        <Form onFinish={onSubmit}>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Item Level" name="ilvl">
                <Input type="number" />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Add</Button>
            </Form.Item>
        </Form>
    );
}
