const bodyParser = require('body-parser');
const express = require('express');
var morgan = require('morgan')
const app = express();
const port = 3000;

// parse application/json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))

// Panggil routes
const routes = require('./routes');

// daftarkan menu routes dari index
app.use('/auth',require('./middleware'))


routes(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
