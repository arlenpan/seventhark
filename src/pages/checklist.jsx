import { Col, Row } from 'antd';
import CharacterPanel from 'src/components/CharacterPanel';
import MainLayout from 'src/layouts/MainLayout';
import { useState, useEffect } from 'react';
import { getAllCharacters } from 'src/api/character';
import ChecklistTables from 'src/components/ChecklistTables';

const Checklist = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = () => getAllCharacters().then(setCharacters);

    return (
        <div>
            <Row>
                {characters.length ? (
                    <Col xs={{ span: 24, order: 2 }} sm={{ span: 18, order: 1 }}>
                        <ChecklistTables characters={characters} />
                    </Col>
                ) : null}

                <Col
                    xs={{ span: 24, order: 1 }}
                    sm={{ span: characters.length ? 6 : 24, order: 2 }}
                >
                    <CharacterPanel characters={characters} onUpdate={getCharacters} />
                </Col>
            </Row>
        </div>
    );
};

Checklist.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Checklist;
