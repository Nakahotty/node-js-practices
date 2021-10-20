const express = require('express')
let router = express.Router()

// middleware applies to req handled by this file, not app.js
router.use((req, res, next) => {
    console.log(req.url, '@ ', Date.now().toString())
    next()
})

router.route('/').get((req, res) => {
    res.send('Things home')
})

router
    .route('/cars')
    .get((req, res) => {
        console.log('GET request for cars')
        res.send('Hi get /things/cars')
    })
    .post((req, res) => {
        console.log('POST request for cars')
        res.send('Hi post /things/cars')
    })

router
    .route('/cars/:carid')
    .get((req, res) => {
        res.send('Hi get /things/cars/' + req.params.carid)
    })
    .put((req, res) => {
        res.send('Hi put /things/cars' + req.params.carid)
    })

module.exports = router
