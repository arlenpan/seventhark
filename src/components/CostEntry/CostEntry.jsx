import { Input } from 'antd';
import classNames from 'classnames';
import { ALL_MATERIALS, CRYSTALS } from 'src/data/economy';
import tierStyles from 'src/styles/tiers.module.scss';
import formStyles from 'src/styles/forms.module.scss';
import styles from './CostEntry.module.scss';

export default function CostEntry({ tiers, costs = {}, onChange, className }) {
    const noTiersSelected = !Object.values(tiers).find((tierValue) => tierValue);

    const handleInputChange = (e, material) => {
        const { value } = e.target;
        onChange(value, material);
    };

    return (
        <div className={classNames(className, styles.container, formStyles['input-panel'])}>
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
            <div>
                {noTiersSelected && <em>Please Select Tiers</em>}
                {Object.keys(tiers)
                    .filter((tier) => tiers[tier])
                    .map((tier) => (
                        <div className={styles.grid} key={tier}>
                            {ALL_MATERIALS.filter(
                                (item) => Math.floor(item.tier) === parseInt(tier, 10)
                            ).map((item) => (
                                <InputCell
                                    key={item.id}
                                    item={item}
                                    costs={costs}
                                    onChange={(e) => handleInputChange(e, item)}
                                />
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}

const InputCell = ({ item, costs, onChange }) => {
    return (
        <div className="d-flex-center" key={item.id}>
            <Input
                type="number"
                className={styles.input}
                value={costs[item.id]}
                onChange={onChange}
            />
            <span
                className={classNames(
                    item.tier === 1 && tierStyles.tier1,
                    item.tier === 2 && tierStyles.tier2,
                    item.tier === 3 && tierStyles.tier3,
                    item.tier === 3.5 && tierStyles['tier3-5']
                )}
            >
                {item.name}
            </span>
        </div>
    );
};
