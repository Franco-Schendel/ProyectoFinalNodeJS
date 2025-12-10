import express from 'express';
import { authentication } from '../middlewares/authentication.js';

import * as productsController from '../controllers/productos.controller.js';

const router = express.Router();

router.get('/products', productsController.getAllProducts);

router.get('/products/:id', productsController.getProductById);

router.post('/products/create', authentication, productsController.createProduct);

router.put('/products/:id', authentication, productsController.editProduct);

router.delete('/products/:id', authentication, productsController.deleteProduct);

export default router;