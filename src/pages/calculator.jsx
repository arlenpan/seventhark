import { Checkbox, Input } from 'antd';
import { useEffect, useState } from 'react';
import { getActiveTiers, getCosts, setActiveTier, setCost } from 'src/api/economy';
import CostEntry from 'src/components/CostEntry';
import MariShopView from 'src/components/MariShopView';
import { HONING_MATERIALS } from 'src/data/economy';
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
            <h3>Mari's Shop Economy Calculator</h3>
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
            <MariShopView tiers={tiers} costs={costs} className="m-ts" />

            <div className="faded">
                <h3>T3 Infinite Chaos Calculator</h3>
                <span>WIP</span>
                <h3>Honing Calculator</h3>
                <span>WIP</span>
                <h3>Ability Stone Calculator</h3>
                <span>WIP</span>
            </div>
        </div>
    );
};

Calculator.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Calculator;
