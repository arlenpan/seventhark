import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { createCharacter, deleteCharacter, resetSampleCharacters } from "src/api/character";
import CreateCharacterForm from "./CreateCharacterForm";

export default function CharacterPanel({ characters, onUpdate }) {
    const [showCreatePanel, setCreatePanel] = useState(false);

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
        <div>
            <h3>Characters</h3>
            {characters.map((char) => (
                <div key={char.name} className="d-flex-center justify-between m-bs">
                    <div className="d-flex-column">
                        <span>Name: {char.name}</span>
                        <span>Item Level: {char.ilvl}</span>
                    </div>
                    <CloseOutlined onClick={() => handleDelete(char)} />
                </div>
            ))}
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
