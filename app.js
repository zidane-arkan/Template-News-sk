const express = require('express');

const app = express();

// VIEW TEMPLATES
// LISTEN
app.listen('3000', () => {
    console.log('Listen to Port 3000');
});

// GET HEADER
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.status(200).sendFile('./views/about.html', { root: __dirname });
});

// REDIRECT
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// Error Routes
app.use((req, res) => {
    res.status(404).sendFile('./views/error.html', { root: __dirname });
});