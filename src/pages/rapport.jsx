import { useEffect, useState } from 'react';
import { getRapport, setNPC } from 'src/api/rapport';
import RapportTable from 'src/components/RapportTable';
import MainLayout from 'src/layouts/MainLayout';

const Rapport = () => {
    const [rapport, setRapport] = useState({});

    useEffect(() => {
        getRapport().then(setRapport);
    }, []);

    const handleChange = (value, npc) => {
        setNPC({ value, npc });
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
