const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const routes = require('./routes');
require("dotenv").config();

// Middleware - Upload files
app.use(fileUpload({
    createParentPath: true
}));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/', routes);

// start server on selected port
const PORT = process.env.API_PORT || '3001';
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});