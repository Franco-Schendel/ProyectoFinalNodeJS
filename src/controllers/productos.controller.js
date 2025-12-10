import * as productsService from '../services/productos.service.js'

export const getAllProducts = async (req, res) => {
    const productos = await productsService.getAllProducts();
    console.log(`Productos ${productos}`);

    if(productos) {
        res.status(200).json(productos);
    }
    else {
        res.status(404).json({message: 'No se encontró'})
    }
    
}

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const producto = await productsService.getProductById(id);
    console.log(`Producto ${producto}`);
    if(producto) {
        res.status(200).json(producto);
    }
    else {
        res.status(404).json({message : 'Producto no encontrado'})
    }
}

export const createProduct = async (req, res) => {
    const {nombre, precio} = req.body;
    const newProduct = await productsService.createProduct(nombre, precio);

    res.status(201).json(newProduct);
}

export const editProduct = async (req, res) => {
    const id = req.params.id;
    const {nombre, precio} = req.body;

    const editedProduct = await productsService.editProduct(id, nombre, precio);

    if(editedProduct){
        res.status(200).json(editedProduct);
    }
    else {
        res.status(404).json({message: "El id solicitado no existe"});
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    const deletedProduct = await productsService.deleteProduct(id);
    console.log(`Producto ${deletedProduct}`);

    if(deletedProduct){
        res.status(200).json(deletedProduct);
    }
    else {
        res.status(404).json({message: "El id solicitado no existe"});
    }
    
}

const productsController = {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}

export default productsController;