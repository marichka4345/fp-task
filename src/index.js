import { tasks } from './tasks';
import { getTotal } from './total';
import { getTotalWithRamda } from './totalWithRamda';

document.getElementById('content1').innerText = getTotal(tasks);

document.getElementById('content2').innerText = getTotalWithRamda(tasks);
