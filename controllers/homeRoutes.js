const sequelize = require("../config/connection");
const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');
const router = require("express").Router();

router.get('/', async (req, res) => {
try {
    
}    
  
      res.render('homepage')
        
  });

  module.exports = router;
