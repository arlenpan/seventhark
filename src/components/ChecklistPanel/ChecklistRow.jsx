import { Checkbox } from 'antd';

export default function ChecklistRow({ item, characters }) {
    return (
        <ol className="d-flex-center">
            {characters.map((char) => (
                <Checkbox key={char.name} />
            ))}
            <span className="m-ls">{item.name}</span>
        </ol>
    );
}
