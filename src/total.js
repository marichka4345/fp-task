import { getDurationString, isWorkType, isPrivateType } from './common';

export const getTotal = (tasks) => {
    const totalDurationValues = tasks
        .filter(task => isWorkType(task) || isPrivateType(task))
        .reduce((result, {name, duration}) => {
            result[name] = (result[name] || 0) + duration;
            return result;
        }, {});
    return Object.entries(totalDurationValues).map(durationValue => {
        return getDurationString(...durationValue);
    }).join('\r\n');
}
