const express = require('express');
const router = express.Router();

// const db = require('../data/dbConfig')
const Recipes = require('../dishes/recipe-model')

  //Get all Recipes
  router.get('/', (req, res) => {
      Recipes.getRecipes().then(recipe => {
          res.status(200).json(recipe)
      }).catch(error => {
          res.status(500).json(error)
      })
  })

    //Add a Recipe
  router.post('/', (req, res) => {
      Recipes.addRecipe(req.body).then(recipes => {
              res.status(201).json(recipes)
          }).catch(error => {
              res.status(500).json({error: "There was an error adding this recipe to the database."})
          })
      })
  


module.exports = router;