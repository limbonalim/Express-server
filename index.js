const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send(`<p style="text-align: center; margin-top: 1rem;">
                 If you want to code some message: http://localhost:8000/encode/my-message <br>
                 If you want to decode some message: http://localhost:8000/decode/my-message<br>
                 Else add any message for echo: http://localhost:8000/hello
                 </p>`);
});

app.get('/encode/:text', (req, res) => {
    const answer = Vigenere.Cipher('password').crypt(req.params.text);
    res.send(answer);
});

app.get('/decode/:text', (req, res) => {
    const answer = Vigenere.Decipher('password').crypt(req.params.text);
    res.send(answer);
});

app.get('/:message', (req, res) => {
    res.send(req.params.message);
});

app.listen(port, () => {
    console.log('Server is started. Port: ' + port);
});
