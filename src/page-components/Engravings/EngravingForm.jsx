import { Input, Form, Button, Select } from 'antd';
import formStyles from 'src/styles/forms.module.scss';
import classes from 'src/data/classes.json';
import { capitalize } from 'src/lib/string';

export default function CreateEngravingForm({ onSubmit, onClose }) {
    return (
        <Form onFinish={onSubmit} className={formStyles['input-panel']}>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input autoFocus />
            </Form.Item>
            <Form.Item label="Class" name="class">
                <Select>
                    {Object.keys(classes).map((key) => (
                        <Select.Option value={key}>{capitalize(classes[key].name)}</Select.Option>
                    ))}
                </Select>
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
