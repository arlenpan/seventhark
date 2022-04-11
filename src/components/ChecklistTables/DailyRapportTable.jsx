import { Checkbox, Table } from 'antd';

export default function DailyRapportTable({ characters }) {
    const checkboxColumns = characters.map((char) => ({
        title: char.name,
        dataIndex: char.name,
        key: char.name,
        width: '80px',
        render: (item, record) => renderCharacterRapportField(char, record.npc),
        onCell: (record) => renderCharacterRapportFieldClassName(char, record.npc),
    }));
    const columns = [...checkboxColumns, { title: 'NPC', dataIndex: 'npc', key: 'npc' }];

    const data = [...Array(12).keys()].map((index) => {
        const name = index < 6 ? 'Song' : 'Emote';
        const baseFields = {
            npc: `${name} ${(index % 6) + 1} ${(index + 1) % 6 === 0 ? '(Crystalline Aura)' : ''}`,
            key: index,
        };
        const characterFields = {};
        return { ...characterFields, ...baseFields };
    });

    const renderCharacterRapportField = (char) => {
        return (
            <div>
                <Checkbox onClick={(e) => {}} />
            </div>
        );
    };

    const renderCharacterRapportFieldClassName = (char, event) => {
        // const charEvent = checklist && checklist[char.name] && checklist[char.name][event.id];
        // const isComplete = charEvent && charEvent.length === event.quantity;
        // return { className: isComplete && formStyles['highlight-cell'] };
    };

    return (
        <>
            <div className="d-flex-center mt-s mb-xs">
                <h3>Dailies - Rapport</h3>
            </div>
            <Table columns={columns} dataSource={data} size="small" pagination={false} />
        </>
    );
}
