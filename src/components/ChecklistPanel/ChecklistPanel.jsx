import { DAILIES, WEEKLIES } from 'src/data/events';
import ChecklistRow from './ChecklistRow';

export default function ChecklistPanel({ characters }) {
    return (
        <div>
            <h3>Dailies</h3>
            <ul>
                {DAILIES.map((daily) => (
                    <ChecklistRow key={daily.id} item={daily} characters={characters} />
                ))}
            </ul>
            <h3>Weeklies</h3>
            <ul>
                {WEEKLIES.map((weekly) => (
                    <ChecklistRow key={weekly.id} item={weekly} characters={characters} />
                ))}
            </ul>
        </div>
    );
}
