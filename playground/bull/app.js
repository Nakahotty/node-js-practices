import express from 'express';
import bodyParser from 'body-parser';
import { sendNewEmail } from './queues/email.queue';
import { serverAdapter } from './queues/email.queue';

const app = express();

app.use(bodyParser.json());

// bull monitoring
app.use('/admin/queues', serverAdapter.getRouter());

app.post('/send-email', async (req, res) => {
    const { message, ...restBody } = req.body;

    await sendNewEmail({
        ...restBody,
        html: `<p>${message}</p>`,
    });
    res.send({status: 'OK'});
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})
