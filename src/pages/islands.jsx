import { useEffect, useState } from 'react';
import { getIslands, setIslandComplete, setIslandFavorite } from 'src/api/islands';
import IslandTable from 'src/components/IslandTable';
import MainLayout from 'src/layouts/MainLayout';

const Islands = () => {
    const [islands, setIslands] = useState({});

    useEffect(() => {
        getIslands().then(setIslands);
    }, []);

    const handleChange = (value, island) => {
        setIslandComplete({ value, island });
        getIslands().then(setIslands);
    };

    const handleFavorite = (value, island) => {
        setIslandFavorite({ value, island });
        getIslands().then(setIslands);
    };

    return <IslandTable islands={islands} onChange={handleChange} onFavorite={handleFavorite} />;
};

Islands.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Islands;
