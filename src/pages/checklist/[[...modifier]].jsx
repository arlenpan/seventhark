import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { getAllCharacters } from 'src/api/character';
import MainLayout from 'src/layouts/MainLayout';
import CharacterPanel from 'src/page-components/Checklist/CharacterPanel';
import ChecklistTables from 'src/page-components/Checklist/ChecklistTables';

const Checklist = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = () => getAllCharacters().then(setCharacters);

    return (
        <Row>
            {characters.length ? (
                <Col xs={{ span: 24, order: 2 }} sm={{ span: 18, order: 1 }}>
                    <ChecklistTables characters={characters} />
                </Col>
            ) : null}

            <Col xs={{ span: 24, order: 1 }} sm={{ span: characters.length ? 6 : 24, order: 2 }}>
                <CharacterPanel characters={characters} onUpdate={getCharacters} />
            </Col>
        </Row>
    );
};

Checklist.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Checklist;
