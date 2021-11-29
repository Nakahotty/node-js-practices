const express = require('express');
const summoner = require('../../services/summoner');

const v1 = express.Router();

v1.get('/summoner', summoner.home);

v1.get('/summoner', summoner.accountDetails);

module.exports = v1;