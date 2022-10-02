const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const jokesRouter = require('./routes/jokes')
const customerRoutes = require('./routes/customerRoutes');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api", jokesRouter);
app.use("/customers", customerRoutes);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
