const router = require('express').Router();
//Do I need these?
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try {
        console.log('sup, fuckers?')
        res.render('homepage', {
            logged_in: req.session.logged_in
          });

    } catch (err) {
        res.status(500).json(err);
    }
})

  module.exports = router;
