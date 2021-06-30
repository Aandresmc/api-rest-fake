const { Router } = require("express");
const router = Router();

const dataFake = require("../data/fake.json");

router.get("/", (req, res) => {
  res.send("Bienvenido a la api de todos!");
});

router.get("/todos", (req, res) => {
  const todos = dataFake;
  res.json(todos);
});

router.get("/todos/:id", async (req, res) => {
  const todos = dataFake;
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  res.json(todo || { message: `no existe la tarea ${req.params.id}` });
});

module.exports = router;
