const { log } = require('console');
const express = require('express');

const app = express();

app.use(express.json());

app.use((req,res) =>{
    res.json({ message:' requete bien reçue'});
});

app.post('/api/recipe',(req,res,next)=>{
    console.log(req.body);
    res.status(201).json({
        message:'Object crée !'
    });
});

module.exports = app;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//let recipe = require('../frontend/html')

app.use('/api/recipe',(req,res,next)=>{
    const recipe = [
        {
            _id: 'bibididou',
            imageUrl:'',
            titre: 'Lasagnes',
            origine: 'italie',
            source:'https://www.marmiton.org/recettes/recette_lasagnes-a-la-bolognaise_18215.aspx',
            ingredient:'ingredient',
            personne:'2',
            date:'15/02/2023',
            recette:'blablabla',
            note:'2'
        }
    ];
    res.status(200).json(recipe);
});

//MONGODB

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://inescuistotmas:Feeling1532@cluster0.wxafoym.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));