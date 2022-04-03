import { useEffect, useState } from 'react';
import { DEFAULT_TIME_UNITS, getCurrentUTC, getDateTimeDiff } from 'src/lib/date';

export default function Countdown({ targetDateTime, units, onReset }) {
    const [time, setTime] = useState(getCurrentUTC());

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

    const duration = getDateTimeDiff(time, targetDateTime);
    if (!duration && onReset) {
        onReset(); // reset target time if current time has crossed over
        return null;
    }

    return (
        <span>
            {DEFAULT_TIME_UNITS.filter((u) => units.includes(u)).map(
                (u, i) => `${duration[u]} ${u}${i < units.length - 1 ? ', ' : ''}`
            )}
        </span>
    );
}
