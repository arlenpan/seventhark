import { Button } from 'antd';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import {
    createCharacter,
    deleteCharacter,
    resetSampleCharacters,
    updateAllCharacters,
} from 'src/api/character';
import CreateCharacterForm from './CreateCharacterForm';

const DraggableCharacters = dynamic(import('./DraggableCharacters'));

export default function CharacterPanel({ characters, onUpdate }) {
    const [showCreatePanel, setCreatePanel] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

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
        <div className="m-bs">
            <h3>Characters</h3>
            {!loading && (
                <DraggableCharacters
                    characters={characters}
                    onDelete={handleDelete}
                    onReorder={handleReorderCharacters}
                />
            )}
            {showCreatePanel && (
                <CreateCharacterForm
                    onSubmit={handleSubmitCreate}
                    onClose={() => setCreatePanel(false)}
                />
            )}
            {!showCreatePanel && (
                <Button onClick={() => setCreatePanel(true)}>Add Character</Button>
            )}
            <Button onClick={handleResetCharacters}>Reset Sample Data</Button>
        </div>
    );
}
