// Création de l'application express et import des dépendances nécessaires + BDD
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
app.use(express.json())
require('dotenv').config();
mongoose.set('strictQuery', false) // Tous les champs envoyés seront enregistrés dans la BDD
//Connexion à la BDD et gestion d'erreurs + model mongose (User)
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.8yecr5t.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

  const User = mongoose.model("User", {
    userName: String,
  });

//déblocage de la sécurité CORS pour permettre aux origines backend et frontend de communiquer
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});
//Fonctionnalités Create et Read de l'Api
app.post("/api/user", (req, res, next) => {
  const addUser = new User({
    ...req.body,
  });
  addUser
    .save()
    .then(() => res.status(201).json({ message: "Utilisateur enregistré" }))
    .catch((err) => res.status(400).json({ err }));
});
app.get("/api/user", (req, res, next) => {
  User
    .find()
    .then((User) => res.status(200).json(User))
    .catch((err) => res.status(400).json({ err }));
});

app.use(cors());
app.use(bodyParser.json())

module.exports = app;