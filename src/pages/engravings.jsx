import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import MainLayout from 'src/layouts/MainLayout';
import EngravingPresetsPanel from 'src/components/Engravings/EngravingPresetsPanel';
import { getEngravingPresets } from 'src/api/engravings';

const Engravings = () => {
    const [presets, setPresets] = useState([]);

    useEffect(() => {
        getPresets();
    }, []);

    const getPresets = () => getEngravingPresets().then(setPresets);

    return (
        <Row>
            <Col xs={{ span: 18 }}>Engravings</Col>
            <Col xs={{ span: 6 }}>
                <EngravingPresetsPanel presets={presets} onUpdate={getPresets} />
            </Col>
        </Row>
    );
};

Engravings.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Engravings;
