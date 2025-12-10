import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/productos.routes.js';
import loginRouter from './src/routes/auth.routes.js';
import bodyParser from 'body-parser';
import { connectDB } from './src/config/db.js';
import { authentication } from './src/middlewares/authentication.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

await connectDB();

app.use('/api', productsRouter);
app.use('/', loginRouter);

/* 
app.get('/ping', (req, res) => {
    res.end('/pong');
});

app.get('/html', (req, res) => {
    res.end(`<h1>Bienvenidos</h1>`);
});

app.get('/json', (req, res) => {
    res.json({"nombre":"Franco", "edad": 20});
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    res.end(`Toma el usuario ${id}`);
});
*/

app.use((req, res, next) => {
    res.status(404).send("ERROR: Solicitud incorrecta");
});

app.listen(PORT, () => {
    console.log(`Servidor WEB creado en http://localhost:${PORT}`);
});