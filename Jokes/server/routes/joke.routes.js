const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/Jokes/", JokeController.findAllJokes);
  app.get("/api/Jokes/:id", JokeController.findOneSingleJoke);
  app.put("/api/Jokes/update/:id", JokeController.updateExistingJoke);
  app.post("/api/Jokes/new", JokeController.createNewJoke);
  app.delete("/api/Jokes/delete/:id", JokeController.deleteAnExistingJoke);
};