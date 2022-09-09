import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import {
    createEngravingPreset,
    deleteEngravingPreset,
    updateEngravingPresets
} from 'src/api/engravings';
import DraggableList from 'src/components/DraggableList';
import CreateEngravingForm from './CreateEngravingForm';

export default function Engravings({ presets = [], onUpdate, activePreset, setActivePreset }) {
    const [showCreatePanel, setCreatePanel] = useState(false);

    const handleSubmitCreate = (values) => {
        createEngravingPreset(values).then(() => {
            onUpdate();
            setActivePreset(values);
            setCreatePanel(false);
        });
    };

    const handleDelete = (preset) => {
        deleteEngravingPreset(preset.name).then(() => {
            if (activePreset.name === preset.name) setActivePreset(null);
            onUpdate();
        });
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
                activeItemKey={activePreset?.name}
                renderItem={(preset) => (
                    <>
                        <div className="d-flex-column">
                            <span>Name: {preset.name}</span>
                        </div>
                        <CloseOutlined
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(preset);
                            }}
                        />
                    </>
                )}
                onReorder={handleReorderPresets}
                onItemClick={setActivePreset}
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
