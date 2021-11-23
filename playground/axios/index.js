const express = require('express');
const app = express();
const summoner = require('./services/summoner');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const v1 = require('./routes/v1/index');

app.use('/api/v1', v1);

v1.get('/', summoner.home);

v1.get('/summoner', summoner.accountDetails);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

// http://localhost:3000/api/v1/summoner?region=NA1&summonerName=DidoBate