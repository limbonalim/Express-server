const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('<p><b>Add any params for echo.</b></br> Example: http://localhost:8000/hello</p>')
});

app.get('/encode/:text', (req, res) => {
    const answer = Vigenere.Cipher('password').crypt(req.params.text);
    res.send(answer);
});

app.get('/:message', (req, res) => {
    res.send(req.params.message);
});

app.listen(port, () => {
    console.log('Server is started. Port: ' + port);
});
