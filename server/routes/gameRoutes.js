const express = require('express');
const router = express.Router();
const { playGame,getHistory } = require('../controllers/gameController');
const auth=require('../middleware/auth.js')
router.post('/play',auth, playGame);
router.get('/history',auth,getHistory);
module.exports = router;
