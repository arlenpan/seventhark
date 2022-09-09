import { Table } from 'antd';
import { useState } from 'react';
import FormEditableCell from 'src/components/FormEditableCell';
import ItemIcon from 'src/components/ItemIcon';
import { CRYSTALS, GOLD, PHEONS, ROYAL_CRYSTALS } from 'src/data/economy';
import { round } from 'src/lib/num';

export default function CrystalsGold({ costs }) {
    const [itemCost, setItemCost] = useState({
        [GOLD.id]: 0,
        [CRYSTALS.id]: 0,
        [ROYAL_CRYSTALS.id]: 0,
        [PHEONS.id]: 0,
    });

    const handleInputChange = (value, record) => {
        const { key } = record;
        const newItemCost = { ...itemCost };
        newItemCost[key] = value;
        setItemCost(newItemCost);
    };

    const columns = [
        {
            title: 'Item Cost',
            dataIndex: 'cost',
            key: 'cost',
            render: (value, record) => (
                <span className="d-flex-center">
                    <FormEditableCell value={value} record={record} onChange={handleInputChange} />
                    <ItemIcon className="ml-xs" item={record.item} />
                </span>
            ),
        },
        {
            title: 'Gold Value',
            dataIndex: 'goldValue',
            key: 'goldValue',
        },
        {
            title: 'Dollar Value (USD)',
            dataIndex: 'dollarValue',
            key: 'dollarValue',
        },
    ];

    const crystalsPerPheon = 850 / 100;

    const goldPerBlueCrystal = costs.crystals / CRYSTALS.purchaseUnit;
    const goldPerPheon = crystalsPerPheon * goldPerBlueCrystal;
    const goldPerRoyalCrystal = costs.royal_crystals / ROYAL_CRYSTALS.purchaseUnit;

    const dollarPerRoyalCrystal = ROYAL_CRYSTALS.packPrice / ROYAL_CRYSTALS.packAmount;
    const dollarPerGold = dollarPerRoyalCrystal / goldPerRoyalCrystal;
    const dollarPerCrystal = (goldPerBlueCrystal / goldPerRoyalCrystal) * dollarPerRoyalCrystal;
    const dollarPerPheon = goldPerPheon * dollarPerGold;

    const data = [
        {
            key: GOLD.id,
            item: GOLD,
            cost: itemCost.gold,
            goldValue: round(itemCost.gold),
            dollarValue: `$${round(itemCost.gold * dollarPerGold)}`,
        },
        {
            key: CRYSTALS.id,
            item: CRYSTALS,
            cost: itemCost.crystals,
            goldValue: round(itemCost.crystals * goldPerBlueCrystal),
            dollarValue: `$${round(itemCost.crystals * dollarPerCrystal)}`,
        },
        {
            key: ROYAL_CRYSTALS.id,
            item: ROYAL_CRYSTALS,
            cost: itemCost.royal_crystals,
            goldValue: round(itemCost.royal_crystals * goldPerRoyalCrystal),
            dollarValue: `$${round(itemCost.royal_crystals * dollarPerRoyalCrystal)}`,
        },
        {
            key: PHEONS.id,
            item: PHEONS,
            cost: itemCost.pheons,
            goldValue: round(itemCost.pheons * goldPerPheon),
            dollarValue: `$${round(itemCost.pheons * dollarPerPheon)}`,
        },
    ];

    return (
        <div className="d-flex-column">
            <span className="subtitle">
                This tool is for comparing whether you should buy items (like skins) with Gold, Blue
                Crystals or Royal Crystals.
            </span>
            <span className="subtitle">
                Dollar value is assumed that you buy the cheapest pack, $10 USD for 1000 Royal
                Crystals.
            </span>
            <Table columns={columns} dataSource={data} size="small" pagination={false} />
        </div>
    );
}
