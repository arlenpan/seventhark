import { Input } from 'antd';
import classNames from 'classnames';
import { ALL_MATERIALS, CRYSTALS } from 'src/data/economy';
import tierStyles from 'src/styles/tiers.module.scss';
import styles from './CostEntry.module.scss';

export default function CostEntry({ tiers, costs = {}, onChange, className }) {
    const handleInputChange = (e, material) => {
        const { value } = e.target;
        onChange(value, material);
    };

    return (
        <div className={classNames(className, styles.container)}>
            <strong>Gem Cost in Gold:</strong>
            <div>
                <Input
                    type="number"
                    className={styles.input}
                    value={costs[CRYSTALS.id]}
                    onChange={(e) => handleInputChange(e, CRYSTALS)}
                />
                95 Crystals
            </div>
            <strong>Action House Costs in Gold:</strong>
            <div className={styles.grid}>
                {!Object.values(tiers).find((tierValue) => tierValue) && (
                    <em>Please Select Tiers</em>
                )}
                {ALL_MATERIALS.map((material) => {
                    if (!tiers[material.tier]) return null;
                    return (
                        <div className="d-flex-center" key={material.id}>
                            <Input
                                type="number"
                                className={styles.input}
                                value={costs[material.id]}
                                onChange={(e) => handleInputChange(e, material)}
                            />
                            <span
                                className={classNames(
                                    material.tier === 1 && tierStyles.tier1,
                                    material.tier === 2 && tierStyles.tier2,
                                    material.tier === 3 && tierStyles.tier3
                                )}
                            >
                                {material.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
