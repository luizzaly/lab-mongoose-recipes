const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Recipe.create({
  title: "Spagetti",

  level: "Easy Peasy",

  ingredients: ["Spagetti", "Tomatos", "Onions"],

  cuisine: "Itian",

  dishType: "Dish",

  duration: 20,
  creator: "Manu"
})
  .then(data => {
    console.log("Recipe is created:", data.title);
  })
  .catch(err => {
    console.log(err);
  });

Recipe.insertMany(data).then(
  data.forEach(element => {
    console.log(element.title);
  })
);

Recipe.findOneAndUpdate(
  { title: "Rigatoni alla Genovese" },
  { duration: 100 },
  { new: true }
)
  .then(recipe => {
    console.log("Success", recipe);
  })
  .catch(err => {
    console.log(err);
  });

Recipe.deleteOne({ title: "Carrot Cake" })
  .then(recipe => {
    console.log("Recipe is deleted", recipe);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
