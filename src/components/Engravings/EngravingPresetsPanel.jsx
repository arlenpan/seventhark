import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import {
    createEngravingPreset,
    deleteEngravingPreset,
    updateEngravingPresets,
} from 'src/api/engravings';
import DraggableList from '../DraggableList';
import CreateEngravingForm from './CreateEngravingForm';

export default function Engravings({ activePreset, presets = [], onUpdate }) {
    const [showCreatePanel, setCreatePanel] = useState(false);

    const handleSubmitCreate = (values) => {
        createEngravingPreset(values);
        onUpdate();
        setCreatePanel(false);
    };

    const handleDelete = (preset) => {
        deleteEngravingPreset(preset.name);
        onUpdate();
    };

    const handleReorderPresets = (newPresets) => {
        updateEngravingPresets(newPresets);
        onUpdate();
    };

    return (
        <section className="mb-s">
            <div className="d-flex-center mb-xs">
                <h3>Presets</h3>
                {presets.length > 1 && <span className="font-small ml-xs">(drag to reorder)</span>}
            </div>

            <DraggableList
                id="engraving-presets"
                items={presets}
                itemKey="name"
                renderItem={(preset) => (
                    <>
                        <div className="d-flex-column">
                            <span>Name: {preset.name}</span>
                        </div>
                        <CloseOutlined onClick={() => handleDelete(preset)} />
                    </>
                )}
                onReorder={handleReorderPresets}
            />

            {showCreatePanel && (
                <CreateEngravingForm
                    onSubmit={handleSubmitCreate}
                    onClose={() => setCreatePanel(false)}
                />
            )}
            {!showCreatePanel && (
                <Button onClick={() => setCreatePanel(true)}>Add Engraving Preset</Button>
            )}
        </section>
    );
}
