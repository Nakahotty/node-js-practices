import Queue from 'bull';
import { createBullBoard } from '@bull-board/api';
import { ExpressAdapter } from '@bull-board/express';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import emailProcess from '../processes/email.process';

const emailQueue = new Queue('email', {
    redis: 'redis://:@127.0.0.1:6379',
    limiter: {
        max: 1000,
        duration: 5000,
    }
});

export const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

const { addQueue, removeQueue, setQueues } = createBullBoard({
    queues: [
        new BullAdapter(emailQueue)
    ],
    serverAdapter
});

emailQueue.process('EMAIL-PROCESS', emailProcess);

export const sendNewEmail = (data) => {
    emailQueue.add('EMAIL-PROCESS', data, {
        attempts: 3,
        priority: 1,
        repeat: {
            cron: '15 3 * * *',
        }
    });
}
