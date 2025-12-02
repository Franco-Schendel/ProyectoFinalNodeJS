import express from 'express';

const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
    res.end('/pong');
});

app.get('/html', (req, res) => {
    res.end(`<h1>Bienvenidos</h1>`);
});

app.get('/json', (req, res) => {
    res.end('{"nombre":"Franco", "edad": 20}');
});


app.listen(PORT, () => {
    console.log(`Servidor WEB creado en http://localhost:${PORT}`);
});