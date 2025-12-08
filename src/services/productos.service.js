let products = [
    {
        id: 1,
        name: "Guitarra",
        pr: 800
    },
    {
        id: 2,
        name: "Flauta",
        price: 100
    },
    {
        id: 3,
        name: "Bajo electrico",
        price: 1500
    }
]

const getAllProducts = () => {
    return products;
}

const getProductById = (id) => {
    return products.find(aProduct => aProduct.id == id);
}

const createProduct = (aName, aPrice) => {
    const newProduct = {
        id : products.length + 1,
        name : aName,
        price : aPrice
    }

    products.push(newProduct);
    return newProduct;
}

export const editProduct = async (id, name, price) => {
    const product = products.find(aProduct => aProduct.id == id);

    product.name = name;
    product.price = price;

    return product
}

export const deleteProduct = async id => {
    const product = products.find(product => product.id == id);
    products = products.filter(product => product.id != id);
    return product;
}

const productsService = {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}

export default productsService;