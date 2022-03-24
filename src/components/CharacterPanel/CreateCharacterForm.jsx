import { Button, Form, Input } from 'antd';
import formStyles from 'src/styles/forms.module.scss';

export default function CreateCharacterForm({ onSubmit, onClose }) {
    return (
        <Form onFinish={onSubmit} className={formStyles['input-panel']}>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Item Level" name="ilvl">
                <Input type="number" />
            </Form.Item>
            <div className="d-flex-center">
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button className="m-lauto" htmlType="submit" type="primary">
                    Add
                </Button>
            </div>
        </Form>
    );
}
