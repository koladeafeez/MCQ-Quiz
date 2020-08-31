const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/', '/index.html'));
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/', '/test.html'));
});

app.listen(port, () => {
    console.log(`listening on port`);
});

