import { useEffect, useState } from 'react';
import { getAllCharacters } from 'src/data/characters';

export default function CharacterPanel({}) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters().then((res) => {
            setCharacters(res);
        });
    }, []);

    return (
        <div>
            <h3>Characters</h3>
            {characters.map((char) => (
                <div key={char.name} className="d-flex-column m-bs">
                    <span>Name: {char.name}</span>
                    <span>Item Level: {char.ilvl}</span>
                </div>
            ))}
        </div>
    );
}
