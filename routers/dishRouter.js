const express = require('express');
const router = express.Router();

// const db = require('../data/dbConfig')
const Dishes = require('../dishes/dish-model')



  //Get all Dishes
  router.get('/', (req, res) => {
      Dishes.getDishes().then(dish => {
          res.status(200).json(dish)
      }).catch(error => {
          res.status(500).json(error)
      })
  })

  //Add a Dish
router.post('/', (req, res) => {
    Dishes.addDish(req.body).then(dish => {
        res.status(201).json(dish)
    }).catch(error => {
        res.status(500).json({error: "There was an error adding this dish to the database."})
    })
})

  //Get A Dish By ID
  router.get('/:id', (req, res) => {
    Dishes.getDish(req.params.id)
    .then(dish => {
        if(!dish){
          res.status(404).json({ errorMessage: 'This dish does not exist' })
        }else{
          res.status(200).json(dish)
        }
    }).catch(error => {
        res.status(500).json(error)
    })
})

  //Get A Dishes Recipe
//   router.get('/:id/recipes', (req,res) => {
//     const { id } = req.params
//     db('dish')
//     .where({'dish.id': id})
//     .join('recipes', {'dish.id': 'recipes.dish_id'})
//     .then(recipe => {
//         res.status(200).json(recipe)
//     }).catch(error => {
//         res.status(500).json(error)
//     })
// })


//Gets the Dishes Ingredients
// router.get('/:id/recipes/ingredients', (req,res) => {
//     const { id } = req.params
//     db('recipes')
//     .where({'recipes.id': id})
//     .join('ingredients', {'recipes.id': 'ingredients.recipe_id'})
//     .then(ingredients => {
//         res.status(200).json(ingredients)
//     }).catch(error => {
//         res.status(500).json(error)
//     })
// })

module.exports = router;