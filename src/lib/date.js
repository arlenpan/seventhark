import { DateTime, Interval } from 'luxon';

const RESET_DAY = 4; // Thursday
const RESET_HOUR = 10; // 10AM
const RESET_MINUTE = 0;

export const DEFAULT_TIME_UNITS = ['days', 'hours', 'minutes', 'seconds', 'milliseconds'];

export const getCurrentTime = () => {
    return DateTime.local();
};

export const getCurrentUTC = () => {
    return DateTime.utc();
};

export const getDailyResetTimeUTC = () => {
    const currentUTC = DateTime.utc();

    // reset time today?
    const year = currentUTC.get('year');
    const month = currentUTC.get('month');
    const day = currentUTC.get('day');
    const resetToday = DateTime.utc(year, month, day, RESET_HOUR, RESET_MINUTE);

    if (resetToday < currentUTC) {
        // we need to find tomorrow's timestamp
        return resetToday.plus({ days: 1 });
    }

    return resetToday;
};

export const getWeeklyResetTimeUTC = () => {
    const currentUTC = DateTime.utc();
    const [yearNum, weekNum, dayNum] = currentUTC.toISOWeekDate().split('-'); // ISO 8601: 2022-W13-7
    const ISOString = `${yearNum}-${weekNum}-${RESET_DAY}`;
    const resetThisWeek = DateTime.fromISO(ISOString, { zone: 'utc' }).plus({
        hours: RESET_HOUR,
        minutes: RESET_MINUTE,
    });

    if (resetThisWeek < currentUTC) {
        // we need to get next week's timestamp
        return resetThisWeek.plus({ weeks: 1 });
    }

    return resetThisWeek;
};

export const getDateTimeDiff = (startDateTime, endDateTime) => {
    if (startDateTime > endDateTime) return;
    return Interval.fromDateTimes(startDateTime, endDateTime)
        .toDuration(DEFAULT_TIME_UNITS)
        .toObject();
};
