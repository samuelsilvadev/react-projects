const express = require('express');
const path = require('path');
const app = express();

app.post('/api/auth', (req, res) => {
    res.status(400).json({
        errors: {
            global: 'Invalid credentials'
        }
    })
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('Running on localhost:8080'));
