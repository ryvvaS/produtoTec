const express = require('express');
const bodyParse = require("body-parser");
const User = require("../Model/Pesquisador");
const Cell = require("../Model/Celula");
const urlencodeParser = bodyParse.urlencoded({extended:false});
const router = express.Router();



router.use(
    express.urlencoded({
      extended: true,
    }),
)
router.use(express.json());



router.get("/inicial",function(req,res){
    res.render("inicial");
});


router.get("/",function(req,res){
   
    res.render('inicial');
});

router.get("/equipe",function(req,res){
   
    res.render('Equipe/equipe');
});


router.get("/Cadastrar",function(req,res){
    
    res.render('CadastroLogin/Cadastrar');
});

router.post('/Cadastrar', async (req, res)=>{

    console.log(req.body);
    res.render("inicial");
    const usuario = {
        name: req.body.name,
        email: req.body.email,
        senha: req.body.senha
    }
    console.log(usuario.name);
    try{
        await User.create(usuario);
        res.render("CadastroLogin/Login");
    }catch{console.log("dados nao recebido")}
    
    
})
router.get("/Login",function(req,res){
    res.render('CadastroLogin/Login');
});

router.post('/Login', async (req, res)=>{
    console.log(req.body);
    user = await User.findOne({where: {email: req.body.email, senha: req.body.senha}});

   if (user === null) {
    console.log('Not found!');
    // res.render("controllerLogin");
  } else {
    
    console.log(user.name); // 'My Title'
    res.render("inicial");
  } 
    
})

router.post('/addCell', async (req, res)=>{
    console.log(req.body);
    await Cell.create(req.body);
    
});

router.get('/mostrar', async (req, res)=>{
    console.log(await Cell.findAll());
    return res.json(await Cell.findAll());
});

module.exports = router
