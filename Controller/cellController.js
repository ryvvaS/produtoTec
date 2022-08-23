const express = require('express');
const Cell = require("../Model/Celula");
const router = express.Router()



router.post('/addCell', async (req, res)=>{
    console.log(req.body);
    await Cell.create(req.body);
    
});

router.get('/mostrar', async (req, res)=>{
    console.log(await Cell.findAll());
    return res.json(await Cell.findAll());
});

module.exports = router