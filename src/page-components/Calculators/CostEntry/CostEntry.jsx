import { Collapse, Input } from 'antd';
import classNames from 'classnames';
import ItemIcon from 'src/components/ItemIcon';
import { ALL_MATERIALS, CRYSTALS, GOLD, ROYAL_CRYSTALS } from 'src/data/economy';
import styles from './CostEntry.module.scss';

export default function CostEntry({ tiers, costs = {}, onChange, className }) {
    const noTiersSelected = !Object.values(tiers).find((tierValue) => tierValue);

    const handleInputChange = (e, material) => {
        const { value } = e.target;
        onChange(value, material);
    };

    return (
        <Collapse defaultActiveKey={['1']}>
            <Collapse.Panel key="1" header="Enter Gold Costs">
                <div className={classNames(className, styles.container)}>
                    <div className="d-flex-center">
                        <div className="mr-xs">
                            <strong>Gem Cost in Gold:</strong>
                            <div className="d-flex-center mb-s">
                                <div className={styles['input-wrapper']}>
                                    <Input
                                        type="number"
                                        className={styles.input}
                                        value={costs[CRYSTALS.id]}
                                        onChange={(e) => handleInputChange(e, CRYSTALS)}
                                    />
                                    <ItemIcon item={GOLD} width={35} />
                                    <span className="mr-xs ml-xs">for {CRYSTALS.purchaseUnit}</span>
                                    <ItemIcon item={CRYSTALS} width={40} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <strong>Gold Bought with Royal Crystals:</strong>
                            <div className="d-flex-center mb-s">
                                <div className={styles['input-wrapper']}>
                                    <span className="mr-xs ml-xs">
                                        {ROYAL_CRYSTALS.purchaseUnit}
                                    </span>
                                    <ItemIcon item={ROYAL_CRYSTALS} width={40} />
                                    <span className="ml-xs mr-xs"> for </span>
                                    <Input
                                        type="number"
                                        className={styles.input}
                                        value={costs[ROYAL_CRYSTALS.id]}
                                        onChange={(e) => handleInputChange(e, ROYAL_CRYSTALS)}
                                    />
                                    <ItemIcon item={GOLD} width={35} />
                                </div>
                            </div>
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
                            <TierGrid
                                tiers={[3, 3.5]}
                                costs={costs}
                                onInputChange={handleInputChange}
                            />
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
            </Collapse.Panel>
        </Collapse>
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
