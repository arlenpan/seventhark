import { Input } from 'antd';
import classNames from 'classnames';
import { ALL_MATERIALS, CRYSTALS } from 'src/data/economy';
import formStyles from 'src/styles/forms.module.scss';
import ItemIcon from '../ItemIcon';
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
            <div className="d-flex-center mb-s">
                <div className={styles['input-wrapper']}>
                    <Input
                        type="number"
                        className={styles.input}
                        value={costs[CRYSTALS.id]}
                        onChange={(e) => handleInputChange(e, CRYSTALS)}
                    />
                    <span className="mr-xs ml-xs">95</span>
                    <ItemIcon item={CRYSTALS} />
                </div>
            </div>

            <strong>Action House Costs in Gold:</strong>
            <div>
                {noTiersSelected && <em>Please Select Tiers</em>}
                {tiers[1] && (
                    <TierGrid tiers={[1]} costs={costs} onInputChange={handleInputChange} />
                )}
                {tiers[2] && (
                    <TierGrid tiers={[2]} costs={costs} onInputChange={handleInputChange} />
                )}
                {tiers[3] && (
                    <TierGrid tiers={[3, 3.5]} costs={costs} onInputChange={handleInputChange} />
                )}

                {Object.keys(tiers)
                    .filter((tier) => tiers[tier])
                    .map((tier) => (
                        <TierGrid
                            key={tier}
                            tier={tier}
                            costs={costs}
                            onInputChange={handleInputChange}
                        />
                    ))}
            </div>
        </div>
    );
}

const TierGrid = ({ tiers = [], costs, onInputChange }) => {
    return tiers.map((tier) => (
        <div className={styles.grid} key={tier}>
            {ALL_MATERIALS.filter((item) => item.tier === parseFloat(tier, 10)).map((item) => (
                <InputCell
                    key={item.id}
                    item={item}
                    costs={costs}
                    onChange={(e) => onInputChange(e, item)}
                />
            ))}
        </div>
    ));
};

const InputCell = ({ item, costs, onChange }) => {
    return (
        <div className={styles['input-wrapper']} key={item.id}>
            <Input
                type="number"
                className={styles.input}
                value={costs[item.id]}
                onChange={onChange}
            />

            {/* <span
                className={classNames(
                    item.tier === 1 && tierStyles.tier1,
                    item.tier === 2 && tierStyles.tier2,
                    item.tier === 3 && tierStyles.tier3,
                    item.tier === 3.5 && tierStyles['tier3-5']
                )}
            >
                {item.name}
            </span> */}

            <ItemIcon item={item} />
        </div>
    );
};
