import { Table } from 'antd';
import { useState } from 'react';
import FormEditableCell from 'src/components/FormEditableCell';
import ItemIcon from 'src/components/ItemIcon';
import { CRYSTALS, GOLD, ROYAL_CRYSTALS } from 'src/data/economy';
import { round } from 'src/lib/num';

export default function CrystalsGold({ costs }) {
    const [itemCost, setItemCost] = useState({
        [GOLD.id]: 0,
        [CRYSTALS.id]: 0,
        [ROYAL_CRYSTALS.id]: 0,
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

    const goldPerBlueCrystal = costs.crystals / CRYSTALS.purchaseUnit;
    const goldPerRoyalCrystal = costs.royal_crystals / ROYAL_CRYSTALS.purchaseUnit;
    const dollarPerRoyalCrystal = ROYAL_CRYSTALS.packPrice / ROYAL_CRYSTALS.packAmount;
    const goldDollarValue = (itemCost.gold / goldPerRoyalCrystal) * dollarPerRoyalCrystal;
    const crystalDollarValue =
        ((itemCost.crystals * goldPerBlueCrystal) / goldPerRoyalCrystal) * dollarPerRoyalCrystal;
    const royalCrystalDollarValue = dollarPerRoyalCrystal * itemCost.royal_crystals;

    const data = [
        {
            key: GOLD.id,
            item: GOLD,
            cost: itemCost.gold,
            goldValue: round(itemCost.gold),
            dollarValue: `$${round(goldDollarValue)}`,
        },
        {
            key: CRYSTALS.id,
            item: CRYSTALS,
            cost: itemCost.crystals,
            goldValue: round(itemCost.crystals * goldPerBlueCrystal),
            dollarValue: `$${round(crystalDollarValue)}`,
        },
        {
            key: ROYAL_CRYSTALS.id,
            item: ROYAL_CRYSTALS,
            cost: itemCost.royal_crystals,
            goldValue: round(itemCost.royal_crystals * goldPerRoyalCrystal),
            dollarValue: `$${round(royalCrystalDollarValue)}`,
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
