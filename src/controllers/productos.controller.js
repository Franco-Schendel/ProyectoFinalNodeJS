import productsService from '../services/productos.service.js'

export const getAllProducts = async (req, res) => {
    const productos = productsService.getAllProducts();
    res.status(200).json(productos);
}

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const producto = productsService.getProductById(id);
    if(producto) {
        res.status(200).json(producto);
    }
    else {
        res.status(404).json({message : 'Producto no encontrado'})
    }
}

export const createProduct = async (req, res) => {
    const {name, price} = req.body;

    const newProduct = productsService.createProduct(name, price);

    res.status(201).json(newProduct);
}

export const editProduct = async (req, res) => {
    const id = req.params.id;
    const {name, price} = req.body;

    const editedProduct = productsService.editProduct(id, name, price);

    if(editedProduct){
        res.status(200).json(editedProduct);
    }
    else {
        res.status(404).json({message: "El id solicitado no existe"});
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    const deletedProduct = productsService.deleteProduct(id);

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