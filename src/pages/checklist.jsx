import { Col, Row } from 'antd';
import CharacterPanel from 'src/components/CharacterPanel';
import MainLayout from 'src/layouts/MainLayout';
import { useState, useEffect } from 'react';
import { getAllCharacters } from 'src/api/character';
import ChecklistPanel from 'src/components/ChecklistPanel';

const Checklist = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = () => getAllCharacters().then(setCharacters);

    return (
        <div>
            <Row>
                <Col xs={24} sm={18}>
                    <ChecklistPanel characters={characters} />
                </Col>
                <Col xs={24} sm={6}>
                    <CharacterPanel characters={characters} onUpdate={getCharacters} />
                </Col>
            </Row>
        </div>
    );
};

Checklist.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Checklist;
