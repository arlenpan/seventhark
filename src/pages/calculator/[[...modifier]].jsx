import { Checkbox, Tabs } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getActiveTiers, getCosts, setActiveTier, setCost } from 'src/api/economy';
import BloodstoneExchangeTable from 'src/page-components/Calculators/BloodstoneExchangeTable';
import CostEntry from 'src/page-components/Calculators/CostEntry';
import CrystalsGold from 'src/page-components/Calculators/CrystalsGold';
import GemTable from 'src/page-components/Calculators/GemTable';
import ImportMarketModal from 'src/page-components/Calculators/ImportMarketModal';
import InfiniteChaosTable from 'src/page-components/Calculators/InfiniteChaosTable';
import MariShopTable from 'src/page-components/Calculators/MariShopTable';
import PVPExchangeTable from 'src/page-components/Calculators/PVPExchangeTable';
import MainLayout from 'src/layouts/MainLayout';

const DEFAULT_TAB = 'mari';

const Calculator = () => {
    const router = useRouter();
    const { modifier } = router.query;

    const [tiers, setTiers] = useState({});
    const [costs, setCosts] = useState({});

    useEffect(() => {
        getActiveTiers().then(setTiers);
        updateCosts();
    }, []);

    const handleTierCheck = (e, n) => {
        const { checked } = e.target;
        setActiveTier(n, checked);
        getActiveTiers().then(setTiers);
    };

    const handleCostChange = (value, item) => {
        setCost(item.id, value);
        updateCosts();
    };

    const updateCosts = () => getCosts().then(setCosts);

    const items = [
        {
            label: "Mari's Shop",
            key: 'mari',
            children: <MariShopTable tiers={tiers} costs={costs} />,
        },
        { label: 'Chaos Exchange', key: 'chaos', children: <InfiniteChaosTable costs={costs} /> },
        { label: 'PVP Exchange', key: 'pvp', children: <PVPExchangeTable costs={costs} /> },
        {
            label: 'Bloodstone Exchange',
            key: 'guild',
            children: <BloodstoneExchangeTable costs={costs} />,
        },
        {
            label: 'Crystal/Pheon Value',
            key: 'crystals',
            children: <CrystalsGold costs={costs} />,
        },
        {
            label: 'Gems',
            key: 'gems',
            children: <GemTable />,
        },
    ];

    return (
        <>
            <div className="d-flex-center align-center justify-between mb-s">
                <div className="d-flex-center">
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
                <ImportMarketModal onSubmit={updateCosts} />
            </div>

            <CostEntry tiers={tiers} costs={costs} onChange={handleCostChange} />

            <Tabs
                className="mt-s"
                activeKey={(modifier && modifier[0]) || DEFAULT_TAB}
                onChange={(key) => router.push(key, undefined, { shallow: true })}
                items={items}
            />
        </>
    );
};

Calculator.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Calculator;
