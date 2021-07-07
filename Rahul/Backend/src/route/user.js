const UserDao = require('../dao/UserDAO');
const express = require('express');
const UserService = require('../service/UserService');
const router = express.Router();

router.get('/:name',async (req,res)=>{
    const user = await UserDao.findUserByName(req.params.name);
    console.log(req.params);
    console.log(user);
    if(!user) res.status(404).send("Invalid Username!");
    else{ 
        res.send(user);
    }
    
});

router.post('/register/', async (req,res) => {
    const user = await UserDao.saveUser(req.body);
    console.log(user);
    res.send(user);
});

module.exports = router;