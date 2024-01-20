//Aquí en el constructor declaramos nuestro array vacío products, y para evitar que mi array se reinicie, nuestro nuevo objeto (junto con todos sus parámetros) lo creamos en nuestro método addProducts.

class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const newProduct = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: this.products.length+1,
        };

        let productsCodes = this.products.map(producto => producto.code);
        if(!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.thumbnail || !newProduct.code || !newProduct.stock){
            console.log("Para poder agregar un producto, todos los campos deben haber sido completados. No dejes ningún campo vacío, porfa");
        }
        else if (productsCodes.includes(newProduct.code)) {
            console.log("Oh no, el producto que deseas agregar, ya ha sido agregado anteriormente.");
        } 
        else {
            this.products.push(newProduct);
            console.log(`Has agregado un nuevo producto exitosamente: `, newProduct);
            console.log("Yupi yupi, el perrito snoopy.")
        }
    }

    getProducts() {
        console.log("Los productos que has agregado son:");
        this.products.forEach(producto => {
            console.log(producto);
        });
    }

    getProductById(id) {
        let productoBuscado = this.products.find(producto => producto.id === id);
        if (productoBuscado === undefined) {
            console.log(`El id introducido no corresponde a ningún producto :(`);
        } 
        else {
            console.log(`El producto con el id = ${id} es`, productoBuscado);
        }
    }
}

const newProducto = new ProductManager();
newProducto.addProduct("Vestido rojo", "Vestido color rojo con piedritas plateadas", 234, "www.url.de.un.vestido.com", 2342, 3);

newProducto.addProduct("Vestido azul", "Vestido color azul con flores", 789, "www.url.de.un.vestido.com", 5322, 1);

newProducto.addProduct("Vestido rojo", "Vestido color rojo con piedritas plateadas", 234, "www.url.de.un.vestido.com", 2342, 3);

newProducto.getProducts();

newProducto.getProductById(4); 

newProducto.addProduct("", "Playera tipo polo azul", 580, "www.url.fake.imaginacion.com", 5322, 1);