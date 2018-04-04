import * as taskTypes from './taskTypes';

export const isWorkType = task => task.type === taskTypes.WORK_TYPE;
export const isPrivateType = task => task.type === taskTypes.PRIVATE_TYPE;

export const getDurationString = (taskName, hours) => {
    return `Total duration of '${taskName}' is ${hours} hours.`;
}
