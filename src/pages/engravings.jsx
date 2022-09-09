import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { getEngravingPresets } from 'src/api/engravings';
import MainLayout from 'src/layouts/MainLayout';
import EngravingPresetsPanel from 'src/page-components/Engravings/EngravingPresetsPanel';

const Engravings = () => {
    const [presets, setPresets] = useState([]);
    const [activePreset, setActivePreset] = useState(null);

    useEffect(() => {
        getPresets();
    }, []);

    const getPresets = () => getEngravingPresets().then(setPresets);

    return (
        <Row>
            <Col xs={{ span: 18 }}>Active Preset: {activePreset && activePreset.name}</Col>
            <Col xs={{ span: 6 }}>
                <EngravingPresetsPanel
                    presets={presets}
                    onUpdate={getPresets}
                    activePreset={activePreset}
                    setActivePreset={setActivePreset}
                />
            </Col>
        </Row>
    );
};

Engravings.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Engravings;
