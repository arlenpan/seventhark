import { Input } from 'antd';
import styles from './FormEditableCell.module.scss';
import { useState, useRef, useEffect } from 'react';

export default function FormEditableCell({ value, record, onChange }) {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editing]);

    const handleSave = (e) => {
        if (onChange) onChange(e.target.value, record);
        setEditing(false);
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    if (editing) {
        return (
            <Input
                className={styles['editable-input']}
                defaultValue={value}
                ref={inputRef}
                onPressEnter={handleSave}
                onBlur={handleSave}
            />
        );
    }
    return (
        <div className={styles['editable-value']} onClick={handleEditClick}>
            {value}
        </div>
    );
}
