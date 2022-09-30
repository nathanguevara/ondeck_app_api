const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jokesRouter = require('./routes/jokes')

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api", jokesRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
