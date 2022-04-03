import { useEffect, useState } from 'react';
import { getIslands, setIslandComplete } from 'src/api/islands';
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

    return (
        <div>
            <IslandTable completed={islands} onChange={handleChange} />
        </div>
    );
};

Islands.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Islands;
