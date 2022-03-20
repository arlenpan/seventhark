import ChecklistRow from 'src/components/ChecklistRow';
import { DAILIES, WEEKLIES } from 'src/data/events';

export default function Home() {
    return (
        <div>
            <h1>Checklist</h1>

            <div>
                <h3>Dailies</h3>
                <ul>
                    {DAILIES.map((daily) => (
                        <ChecklistRow key={daily.id} item={daily} />
                    ))}
                </ul>
                <h3>Weeklies</h3>
                <ul>
                    {WEEKLIES.map((weekly) => (
                        <ChecklistRow key={weekly.id} item={weekly} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
