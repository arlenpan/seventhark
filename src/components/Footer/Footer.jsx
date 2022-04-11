import { useState } from 'react';
import { getDailyResetTimeUTC, getWeeklyResetTimeUTC } from 'src/lib/date';
import { Countdown } from '../Timer';

export default function Footer() {
    const [dailyReset, setDailyReset] = useState(getDailyResetTimeUTC());
    const [weeklyReset, setWeeklyReset] = useState(getWeeklyResetTimeUTC());

    return (
        <footer className="d-flex-column d-flex-center font-small mt-s">
            <span>
                Daily reset in{' '}
                <Countdown
                    targetDateTime={dailyReset}
                    units={['hours', 'minutes', 'seconds']}
                    onReset={() => setDailyReset(getDailyResetTimeUTC())}
                />
            </span>
            <span>
                Weekly reset in{' '}
                <Countdown
                    targetDateTime={weeklyReset}
                    units={['days', 'hours', 'minutes']}
                    onReset={() => setWeeklyReset(getWeeklyResetTimeUTC())}
                />
            </span>
            <span>Built by Vynnr</span>
        </footer>
    );
}
