import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import {
    createCharacter,
    deleteCharacter,
    resetSampleCharacters,
    updateAllCharacters,
} from 'src/api/character';
import DraggableList from 'src/components/DraggableList';
import CreateCharacterForm from './CreateCharacterForm';

export default function CharacterPanel({ characters = [], onUpdate }) {
    const [showCreatePanel, setCreatePanel] = useState(false);

    const handleReorderCharacters = (newCharacters) => {
        updateAllCharacters(newCharacters);
        onUpdate();
    };

    const handleResetCharacters = () => {
        resetSampleCharacters();
        onUpdate();
    };

    const handleSubmitCreate = (character) => {
        createCharacter(character);
        onUpdate();
        setCreatePanel(false);
    };

    const handleDelete = (character) => {
        deleteCharacter(character);
        onUpdate();
    };

    return (
        <section className="mb-s">
            <div className="d-flex-center mb-xs">
                <h3>Characters</h3>
                {characters.length > 1 && (
                    <span className="font-small ml-xs">(drag to reorder)</span>
                )}
            </div>
            <DraggableList
                id="characters"
                items={characters}
                itemKey="name"
                renderItem={(character) => (
                    <>
                        <div className="d-flex-column">
                            <span>Name: {character.name}</span>
                            <span>Item Level: {character.ilvl}</span>
                        </div>
                        <CloseOutlined onClick={() => handleDelete(character)} />
                    </>
                )}
                onReorder={handleReorderCharacters}
            />

            {showCreatePanel && (
                <CreateCharacterForm
                    onSubmit={handleSubmitCreate}
                    onClose={() => setCreatePanel(false)}
                />
            )}
            {!showCreatePanel && (
                <Button onClick={() => setCreatePanel(true)}>Add Character</Button>
            )}
            {/* <Button onClick={handleResetCharacters}>Reset Sample Data</Button> */}
        </section>
    );
}
