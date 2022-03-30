import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

const HJID = 2900319;
const HJSV = 6;

export default function useHotjar() {
    useEffect(() => {
        hotjar.initialize(HJID, HJSV);
    }, []);

    return hotjar;
}
