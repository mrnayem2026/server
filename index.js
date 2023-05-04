const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

const chef = require('./data/chef.json');
const recipes = require('./data/recipes.json');

app.get('/', (req, res) => {
  res.send(chef)
})

app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedRecipe = recipes.find(recipe => recipe.id === id);
  res.send(selectedRecipe)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
