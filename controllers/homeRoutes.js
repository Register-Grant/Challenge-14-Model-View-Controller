const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');

router.get('/', async (req, res) => {
    
  
      res.render('homepage')
        
  });

  module.exports = router;
