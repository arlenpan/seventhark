import { Checkbox, Tabs } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getActiveTiers, getCosts, setActiveTier, setCost } from 'src/api/economy';
import BloodstoneExchangeTable from 'src/components/Calculators/BloodstoneExchangeTable';
import CostEntry from 'src/components/Calculators/CostEntry';
import CrystalsGold from 'src/components/Calculators/CrystalsGold';
import InfiniteChaosTable from 'src/components/Calculators/InfiniteChaosTable';
import MariShopTable from 'src/components/Calculators/MariShopTable';
import PVPExchangeTable from 'src/components/Calculators/PVPExchangeTable';
import MainLayout from 'src/layouts/MainLayout';

const DEFAULT_TAB = 'mari';

const Calculator = () => {
    const router = useRouter();
    const { modifier } = router.query;

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
            <div className="d-flex-center mb-s">
                {[...Array(3).keys()].map((n) => (
                    <div className="d-flex-center" key={n}>
                        <Checkbox
                            onClick={(e) => handleTierCheck(e, n + 1)}
                            checked={tiers[n + 1]}
                        />
                        <span className="ml-xs mr-s">Tier {n + 1}</span>
                    </div>
                ))}
            </div>

            <CostEntry tiers={tiers} costs={costs} onChange={handleCostChange} />

            <Tabs
                className="mt-s"
                activeKey={(modifier && modifier[0]) || DEFAULT_TAB}
                onChange={(key) => router.push(key, undefined, { shallow: true })}
            >
                <Tabs.TabPane tab="Mari's Shop" key="mari">
                    <MariShopTable tiers={tiers} costs={costs} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Chaos Exchange" key="chaos">
                    <InfiniteChaosTable costs={costs} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="PvP Exchange" key="pvp">
                    <PVPExchangeTable costs={costs} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Sylmael Bloodstone Exchange" key="guild">
                    <BloodstoneExchangeTable costs={costs} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Crystal Value" key="crystals">
                    <CrystalsGold costs={costs} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Item Honing (WIP)" key="honing" disabled>
                    <div>WIP</div>
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
};

Calculator.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Calculator;
