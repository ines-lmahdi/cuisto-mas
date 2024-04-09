// Creation du server ( https://www.youtube.com/watch?v=fbiJnYMOPrI )

const express = require("express");
const port = process.env.PORT || 5000;
/* Signifie allume le server défini au préalable, sinon le port 5000 */

const app = express();

app.listen(port, () => {
  console.log("Serveur est en ligne !");
});

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur notre API en NodeJS !" });
});

const users = require("./routes/users");
app.use("/users", users);
