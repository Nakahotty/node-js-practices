const config = require('../config');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

// authentication via headers
const axiosOptions = {
    headers: {
        "X-Riot-Token": process.env.RIOTKEY
    }
}

const home = (req, res) => {
    return res.status(200).send('Summoner Home');
}

const getSummonerByName = async (region, summonerName) => {
    const res = await axios.get(config.summonerByNameUrl(region, summonerName), axiosOptions)
    console.log(res.data);
    return res.data;
};

// axios uses promises so we have to use async/await
const accountDetails = async (req, res) => {
    if (!req.query.summonerName || !req.query.region) {
        return res.status(404).json({msg: 'No entered parameters'});
    }

    const data = await getSummonerByName(req.query.region, req.query.summonerName);
    return res.status(200).json(data);
}

module.exports = {
    accountDetails,
    home
}