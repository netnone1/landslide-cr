const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../views/mapA.hbs'))
})

router.get('/map-b', (req, res) => {
    res.render(path.join(__dirname, '../views/mapB.hbs'))
})

router.get('/map-c', (req, res) => {
    res.render(path.join(__dirname, '../views/mapC.hbs'))
})

router.get('/map-d', (req, res) => {
    res.render(path.join(__dirname, '../views/mapD.hbs'))
})

router.get('/map-e', (req, res) => {
    res.render(path.join(__dirname, '../views/mapE.hbs'))
})

router.get('/map-f', (req, res) => {
    res.render(path.join(__dirname, '../views/mapF.hbs'))
})

module.exports = router