import { Input } from 'antd';
import { CRYSTALS, HONING_MATERIALS } from 'src/data/economy';
import styles from './CostEntry.module.scss';

export default function CostEntry({ tiers, costs = {}, onChange, className }) {
    const handleInputChange = (e, material) => {
        const { value } = e.target;
        onChange(value, material);
    };

    return (
        <div className={className}>
            Mari's Shop:
            <div>
                <Input
                    type="number"
                    className={styles.input}
                    value={costs[CRYSTALS.id]}
                    onChange={(e) => handleInputChange(e, CRYSTALS)}
                />
                95 Crystals
            </div>
            Action House Costs:
            <div className={styles.container}>
                {HONING_MATERIALS.map((material) => {
                    if (!tiers[material.tier]) return null;
                    return (
                        <div className="d-flex-center" key={material.id}>
                            <Input
                                type="number"
                                className={styles.input}
                                value={costs[material.id]}
                                onChange={(e) => handleInputChange(e, material)}
                            />
                            {material.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
