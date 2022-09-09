import { Button, Modal, Select } from 'antd';
import { useState } from 'react';
import { importLostArkMarket, REGIONS } from 'src/api/market';

export default function ImportMarketModal({ onSubmit }) {
    const [visible, setVisible] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleSubmit = async () => {
        const data = await importLostArkMarket({ region: REGIONS[selectedRegion] });
        if (data) {
            onSubmit();
            setVisible(false);
        }
    };

    return (
        <>
            <Button size="small" onClick={() => setVisible(true)}>
                Import from Lost Ark Market
            </Button>
            <Modal
                title="Import from Lost Ark Market Online"
                open={visible}
                onCancel={() => setVisible(false)}
                okText="Import"
                onOk={handleSubmit}
                okButtonProps={{ disabled: selectedRegion === null }}
            >
                <Select
                    value={selectedRegion}
                    onChange={(value) => setSelectedRegion(value)}
                    className="w-100"
                >
                    <Select.Option disabled value={null}>
                        Select a Region
                    </Select.Option>
                    {Object.keys(REGIONS).map((key) => (
                        <Select.Option key={key} value={key}>
                            {REGIONS[key].name}
                        </Select.Option>
                    ))}
                </Select>
            </Modal>
        </>
    );
}
