import * as R from 'ramda';

import { getDurationString, isWorkType, isPrivateType } from './common';

export const getTotalWithRamda = (tasks) => {
    const isCorrectTaskType = R.either(isWorkType, isPrivateType);
    const workOrPrivateTasks = R.filter(isCorrectTaskType, tasks);

    const groupByName = R.groupBy(task => task.name);
    const totalDurationValues = R.map(
        tasks => R.reduce((result, task) => result + task.duration, 0, tasks),
        groupByName(workOrPrivateTasks));
    const durationStrings = R.mapObjIndexed((value, key) => getDurationString(key, value), totalDurationValues);
    return R.values(durationStrings).join('\r\n');
}
