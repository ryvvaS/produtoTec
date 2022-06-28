const express = require('express');
const bodyParse = require("body-parser");
const User = require("../Model/Pesquisador");
// const Cell = require("../Model/Celula");
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

    res.render("inicial");
    const usuario = {
        name: req.body.name,
        email: req.body.email,
        senha: req.body.senha
    }
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
    user = await User.findOne({where: {email: req.body.email, senha: req.body.senha}});

   if (user === null) {
    console.log('Not found!');
    // res.render("controllerLogin");
  } else {
    usuario.id = user.id;
    usuario.name = user.name;
    usuario.logado = true;
    res.render("inicial",{logado: usuario.logado});
  } 
    
})

//MARK: Celulas ----------------------------------------------------------------
router.get("/addCelulas",function(req,res){
    if(usuario.logado){
        res.render('CelulasScreem/addCelulas');
        
    }else{
        res.render('inicial',{logado: usuario.logado});
    }
    
});

router.post('/addCelulas', async (req, res)=>{
    console.log(req.body);
    const celula ={
        name: req.body.name,
        tipo: req.body.tipo,
        dataColeta: req.body.date,
        // idPesquisador: 1
        idPesquisador: usuario.id
    }
    await Celula.create(celula);
    res.render('inicial',{logado: usuario.logado});
    
});

router.get('/mostrarCelulas', async (req, res)=>{
    if(usuario.logado){
        const pesquisador = await User.findByPk(usuario.id, {include: Celula}); 
        console.log(pesquisador.Celulas);
        res.render('CelulasScreem/mostrarCelulas',{data: pesquisador.Celulas});
        // return res.json(pesquisador.celula);
    }else{
        res.render('inicial',{logado: usuario.logado});
    }
    
});

router.get('/mostrar', async (req, res)=>{
    const pesquisador = await User.findByPk(1, {include: Celula}); // alterar a pk de 1 para usuario.id
    
    return res.json(pesquisador.Celulas);
});

module.exports = router
