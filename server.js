const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Panggil routes
const routes = require('./routes');
routes(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
