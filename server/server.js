const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

//MiddleWare
app.use(bodyParser.json());
app.use(session({
  secret: 'scppbysnack',
  saveUninitialized: false,
  resave: false
}));


app.post("/api/login", (req, res) => {
  console.log(req.body.role);
  const { role } = req.body;
  req.session.user = {
    id: req.session.id,
    role: role
  }
});

app.get("/loggedIn/admin", (req, res, next) => {
  console.log(req.session)
  res.sendStatus(200)
})

const port = 3010;
app.listen(port, () => console.log(`Magic Happens on Port:${port}`));
