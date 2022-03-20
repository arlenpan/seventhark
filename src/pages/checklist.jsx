import { Col, Row } from 'antd';
import CharacterPanel from 'src/components/CharacterPanel';
import ChecklistRow from 'src/components/ChecklistRow';
import { DAILIES, WEEKLIES } from 'src/data/events';
import MainLayout from 'src/layouts/MainLayout';

const Checklist = () => {
    return (
        <div>
            <h1>Checklist</h1>

            <Row>
                <Col xs={20}>
                    <h3>Dailies</h3>
                    <ul>
                        {DAILIES.map((daily) => (
                            <ChecklistRow key={daily.id} item={daily} />
                        ))}
                    </ul>
                    <h3>Weeklies</h3>
                    <ul>
                        {WEEKLIES.map((weekly) => (
                            <ChecklistRow key={weekly.id} item={weekly} />
                        ))}
                    </ul>
                </Col>
                <Col xs={4}>
                    <CharacterPanel />
                </Col>
            </Row>
        </div>
    );
};

Checklist.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Checklist;
