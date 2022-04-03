import { useEffect, useState } from 'react';
import { getRapport, setRapportComplete } from 'src/api/rapport';
import RapportTable from 'src/components/RapportTable';
import MainLayout from 'src/layouts/MainLayout';

const Rapport = () => {
    const [rapport, setRapport] = useState({});

    useEffect(() => {
        getRapport().then(setRapport);
    }, []);

    const handleChange = (value, npc) => {
        setRapportComplete({ value, npc });
        getRapport().then(setRapport);
    };

    return (
        <div>
            <RapportTable completed={rapport} onChange={handleChange} />
        </div>
    );
};

Rapport.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Rapport;
