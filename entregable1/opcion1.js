//Para evitar que mi array products se reinicie cada vez que agrego un objeto nuevo, declaré mi array por afuera de mi clase.

class ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = products.length + 1; 
    }

    addProduct(producto) {
        let productsCodes = products.map(producto => producto.code);
        if(!producto.title || !producto.description || !producto.price || !producto.thumbnail || !producto.code || !producto.stock){
            console.log("Para poder agregar un producto, todos los campos deben haber sido completados. No dejes ningún campo vacío, porfa");
        }
        else if (productsCodes.includes(producto.code)) {
            console.log("Oh no, el producto que deseas agregar, ya ha sido agregado anteriormente.");
        } 
        else {
            products.push(producto);
            console.log(`Has agregado un nuevo producto exitosamente: `, producto);
        }
    }

    getProducts() {
        console.log("Los productos que has agregado son:");
        products.forEach(producto => {
            console.log(producto);
        });
    }

    getProductById(id) {
        let productoBuscado = products.find(producto => producto.id === id);
        if (productoBuscado === undefined) {
            console.log(`El id introducido no corresponde a ningún producto :(`);
        } 
        else {
            console.log(`El producto con el id = ${id} es`, productoBuscado);
        }
    }
}

const products = [];

const newProducto1 = new ProductManager("Vestido rojo", "Vestido color rojo con piedritas plateadas", 234, "www.url.de.un.vestido.com", 2342, 3);
newProducto1.addProduct(newProducto1);
const newProducto2 = new ProductManager("Vestido azul", "Vestido color azul con flores", 789, "www.url.de.un.vestido.com", 5322, 1);
newProducto2.addProduct(newProducto2);
newProducto1.addProduct(newProducto1);
newProducto2.getProducts();
newProducto2.getProductById(4); 

const newProducto3 = new ProductManager("", "Playera tipo polo azul", 580, "www.url.fake.imaginacion.com", 6572, 1);
newProducto3.addProduct(newProducto3);
