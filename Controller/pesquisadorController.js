const express = require('express');
const bodyParse = require("body-parser");
const User = require("../Model/Pesquisador");
const urlencodeParser = bodyParse.urlencoded({extended:false});
const router = express.Router();
router.use(
    express.urlencoded({
      extended: true,
    }),
)
router.use(express.json());

router.get("/Cadastrar",function(req,res){
    
    res.render('Cadastrar');
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
        res.render("Login");
    }catch{console.log("dados nao recebido")}
    
    
})
router.get("/Login",function(req,res){
    res.render('Login');
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

module.exports = router
