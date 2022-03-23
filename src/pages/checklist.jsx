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
                <Col xs={{ span: 24, order: 2 }} sm={{ span: 18, order: 1 }}>
                    {characters.length ? (
                        <ChecklistPanel characters={characters} />
                    ) : (
                        <span>Please add a character.</span>
                    )}
                </Col>
                <Col xs={{ span: 24, order: 1 }} sm={{ span: 6, order: 2 }}>
                    <CharacterPanel characters={characters} onUpdate={getCharacters} />
                </Col>
            </Row>
        </div>
    );
};

Checklist.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Checklist;
