import { useEffect, useState } from 'react';

export default function Timer({ initialDateTime }) {
    const [time, setTime] = useState(initialDateTime);

    useEffect(() => {
        if (!time) return;

        const intervalId = setInterval(() => {
            const newTime = time.plus(1000);
            setTime(newTime);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [time]);

    if (!time) return null;
    return <div>{time.toFormat('h:mm:ss a ZZZZ')}</div>;
}
