const express = require('express');
const bodyParse = require("body-parser");
const User = require("../Model/Pesquisador");
const Cell = require("../Model/Celula");
const urlencodeParser = bodyParse.urlencoded({extended:false});
const router = express.Router();

var usuario  = require("./pesquisadorController");
const Celula = require('../Model/Celula');

router.use(
    express.urlencoded({
      extended: true,
    }),
)
router.use(express.json());


//MARK: Home -----------------------------------------------------------------
router.get("/inicial",function(req,res){
    console.log(usuario);
    res.render("inicial",{logado: usuario.logado});
});


router.get("/",function(req,res){
   
    res.render('inicial',{logado: usuario.logado});
});

//MARK: Sair -----------------------------------------------------------------
router.get("/sair",function(req,res){
    usuario.logado = false
    res.render('inicial',{logado: usuario.logado});
});


//MARK: Equipe -----------------------------------------------------------------
router.get("/equipe",function(req,res){
   
    res.render('Equipe/equipe',{logado: usuario.logado});
});



//MARK: CADASTRO ----------------------------------------------------------------
router.get("/Cadastrar",function(req,res){
    if(usuario.logado){
        res.render('inicial',{logado: usuario.logado});
    }else{
        res.render('CadastroLogin/Cadastrar');
    }
    
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

//MARK: Login -------------------------------------------------------------------
router.get("/Login",function(req,res){
    if(usuario.logado){
        res.render('inicial',{logado: usuario.logado});
    }else{
        res.render('CadastroLogin/Login');
    }
    
});

router.post('/Login', async (req, res)=>{
    console.log(req.body);
    user = await User.findOne({where: {email: req.body.email, senha: req.body.senha}});

   if (user === null) {
    console.log('Not found!');
    // res.render("controllerLogin");
  } else {
    usuario.id = user.id;
    usuario.name = user.name;
    usuario.logado = true;
    console.log(user.name); // 'My Title'
    res.render("inicial",{logado: usuario.logado});
  } 
    
})

//MARK: Celulas ----------------------------------------------------------------
router.post('/addCell', async (req, res)=>{
    console.log(req.body);
    const celula ={
        name: req.body.name,
        tipo: req.body.tipo,
        dataColeta: req.body.dataColeta,
        idPesquisador: 1
        // idPesquisador: usuario.id
    }
    await Cell.create(celula);
    
});

router.get('/mostrar', async (req, res)=>{
    const pesquisador = await User.findByPk(1, {include: Celula}); // alterar a pk de 1 para usuario.id
    return res.json(pesquisador.celula);
});

module.exports = router
