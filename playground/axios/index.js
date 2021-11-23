const express = require('express');
const app = express();
const summoner = require('./services/summoner');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const v1 = express.Router();

app.use('/api/v1', v1);

v1.get('/', summoner.home);

v1.get('/summoner', summoner.accountDetails);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

// http://localhost:3000/v1/api/summoner/summonerRegion=NA1&summonerName=Nasko