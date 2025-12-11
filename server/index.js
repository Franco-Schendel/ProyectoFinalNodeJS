import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/productos.routes.js';
import loginRouter from './src/routes/auth.routes.js';
import bodyParser from 'body-parser';
import { connectDB } from './src/config/db.js';
import { authentication } from './src/middlewares/authentication.js';

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(bodyParser.json());
app.use('/uploads', express.static("uploads"));

await connectDB();

app.use('/api', productsRouter);
app.use('/', loginRouter);

app.use((req, res, next) => {
    res.status(404).send("ERROR: Solicitud incorrecta");
});

app.listen(PORT, () => {
    console.log(`Servidor WEB creado en http://localhost:${PORT}`);
});