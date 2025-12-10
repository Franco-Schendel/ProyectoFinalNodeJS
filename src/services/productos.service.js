import Product from '../models/productos.model.js';

export const getAllProducts = async () => {
    return await Product.find();
}

export const getProductById = async (id) => {
    return await Product.findOne({id});
}

export const createProduct = async (aName, aPrice) => {
    return await Product.create({ nombre: aName, precio: aPrice });
}

export const editProduct = async (id, nombre, precio) => {
    return await Product.findOneAndUpdate(
        { id },
        { nombre: nombre, precio: precio },
        { new: true, runValidators: true }
    );
};

export const deleteProduct = async id => {
    return await Product.findOneAndDelete({id});
}