import { Input, Form, Button } from 'antd';
import formStyles from 'src/styles/forms.module.scss';

export default function CreateEngravingForm({ onSubmit, onClose }) {
    return (
        <Form onFinish={onSubmit} className={formStyles['input-panel']}>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input autoFocus />
            </Form.Item>
            <div className="d-flex-center">
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button className="ml-auto" htmlType="submit" type="primary">
                    Add
                </Button>
            </div>
        </Form>
    );
}
