import { Checkbox } from "antd";

export default function ChecklistRow({ item, characters }) {
    return (
        <ol className="d-flex-center">
            {characters.map((char, i) => {
                return (
                    <>
                        <Checkbox key={char.name} disabled={item.ilvl && char.ilvl < item.ilvl} />
                        {i < characters.length - 1 && <span className="m-ls m-rs">|</span>}
                    </>
                );
            })}
            <span className="m-ls">{item.name}</span>
        </ol>
    );
}
