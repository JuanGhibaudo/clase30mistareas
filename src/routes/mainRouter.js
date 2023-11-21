const express= require('express')
const router = express.Router()


router.get('/', (req, res) => res.send('router con get'))
router.post('/', (req, res) => res.send('router con post'))
router.put('/', (req, res) => res.send('router con put'))
router.delete('/', (req, res) => res.send('router con delete'))

module.exports = router;