import express from 'express';

import productsController from '../controllers/productos.controller.js';

const router = express.Router();

router.get('/productos', productsController.getAllProducts);

router.get('/productos/:id', productsController.getProductById);

router.post('/productos', productsController.createProduct);

router.put('/productos/:id', productsController.editProduct);

router.delete('/productos/:id', productsController.deleteProduct);

export default router;