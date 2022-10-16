const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
app.listen(PORT);

app.get("/", (req, res) => {
  res.render("index");
})

console.log(`Rodando na porta ${PORT}`);
