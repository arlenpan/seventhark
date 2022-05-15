import { useEffect, useState } from 'react';
import { getRapport, setRapportComplete, setRapportFavorite } from 'src/api/rapport';
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

    const handleFavorite = (value, npc) => {
        setRapportFavorite({ value, npc });
        getRapport().then(setRapport);
    };

    return <RapportTable rapport={rapport} onChange={handleChange} onFavorite={handleFavorite} />;
};

Rapport.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Rapport;
