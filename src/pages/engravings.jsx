import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { getEngravingPresets } from 'src/api/engravings';
import MainLayout from 'src/layouts/MainLayout';
import EngravingEditor from 'src/page-components/Engravings/EngravingEditor';
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
            <Col xs={{ span: 24, order: 2 }} sm={{ span: 18, order: 1 }}>
                {activePreset && (
                    <EngravingEditor
                        key={activePreset ? activePreset.name : null}
                        preset={activePreset}
                    />
                )}
                {!activePreset && <div>No preset selected.</div>}
            </Col>
            <Col xs={{ span: 24, order: 1 }} sm={{ span: 6, order: 2 }}>
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
