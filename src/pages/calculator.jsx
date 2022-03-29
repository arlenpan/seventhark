import { Checkbox, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { getActiveTiers, getCosts, setActiveTier, setCost } from 'src/api/economy';
import CostEntry from 'src/components/CostEntry';
import InfiniteChaosTable from 'src/components/InfiniteChaosTable';
import MariShopTable from 'src/components/MariShopTable';
import MainLayout from 'src/layouts/MainLayout';

const Calculator = () => {
    const [tiers, setTiers] = useState({});
    const [costs, setCosts] = useState({});

    useEffect(() => {
        getActiveTiers().then(setTiers);
        getCosts().then(setCosts);
    }, []);

    const handleTierCheck = (e, n) => {
        const { checked } = e.target;
        setActiveTier(n, checked);
        getActiveTiers().then(setTiers);
    };

    const handleCostChange = (value, item) => {
        setCost(item.id, value);
        getCosts().then(setCosts);
    };

    return (
        <div>
            <div className="d-flex-center">
                {[...Array(3).keys()].map((n) => (
                    <div className="d-flex-center" key={n}>
                        <Checkbox
                            onClick={(e) => handleTierCheck(e, n + 1)}
                            checked={tiers[n + 1]}
                        />
                        <span className="m-lxs m-rs">Tier {n + 1}</span>
                    </div>
                ))}
            </div>

            <CostEntry tiers={tiers} costs={costs} className="m-ts" onChange={handleCostChange} />

            <Tabs className="m-ts">
                <Tabs.TabPane tab="Mari's Shop" key="mari">
                    <MariShopTable tiers={tiers} costs={costs} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="T3 Infinite Chaos" key="infinite">
                    <InfiniteChaosTable costs={costs} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Item Honing" key="honing">
                    <div>WIP</div>
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
};

Calculator.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Calculator;
