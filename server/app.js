const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


const routerMovies = require('./routes/movie')

app.use('/api/movies', routerMovies);

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});
app.listen(5000);