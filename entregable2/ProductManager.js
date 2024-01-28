const fs = require('fs')
const dirName = './products'

class ProductManager {
    constructor() {
        this.path = dirName + "/array.json"
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        /*const fs = require('fs')
        const dirName = './products'
        const fileName = dirName + "/array.json"*/

        const newProduct = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: products.length+1,
        };

        let productsCodes = products.map(product => product.code);
        if(!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.thumbnail || !newProduct.code || !newProduct.stock){
            console.log("Para poder agregar un producto, todos los campos deben haber sido completados. No dejes ningún campo vacío, porfa");
        }
        else if (productsCodes.includes(newProduct.code)) {
            console.log("Oh no, el producto que deseas agregar, ya ha sido agregado anteriormente.");
        } 
        else {
            products.push(newProduct);
            //console.log(`Has agregado un nuevo producto exitosamente: `, newProduct);
            /*const addProductPromise = async () => {
                try {
                    await fs.promises.mkdir(dirName,{ recursive: true })
                    await fs.promises.writeFile(fileName, JSON.stringify(products))
                    let resultado = await fs.promises.readFile(fileName, "utf-8")
                    resultado = JSON.parse(resultado)
                    console.log(`Has agregado un nuevo producto exitosamente: `, resultado); //Esto no esta funcionando
                } catch (error) {
                    console.log("No se pudo cumplir la promesa, error: " + error);
                }
            }
            addProductPromise();*/
            try {
                fs.mkdirSync(dirName,{ recursive: true })
                fs.writeFileSync(this.path, JSON.stringify(products))
                //let resultado = fs.readFileSync(this.path, "utf-8")
                //resultado = JSON.parse(resultado)
                console.log(`Has agregado un nuevo producto exitosamente: `, newProduct); 
            } catch (error) {
                console.log("No se pudo cumplir la promesa, error: " + error);
            }
        }
    }

    getProducts() {
        console.log("Los productos que has agregado son:");
        let resultado = fs.readFileSync(this.path, "utf-8")
        resultado = JSON.parse(resultado)
        console.log(resultado)
    }

    getProductById(id) {
        let resultado = fs.readFileSync(this.path, "utf-8")
        resultado = JSON.parse(resultado)
        let productoBuscado = resultado.find(producto => producto.id === id);
        if (productoBuscado === undefined) {
            console.log(`El id introducido no corresponde a ningún producto :(`);
        } 
        else {
            console.log(`El producto con el id = ${id} es`, productoBuscado);
        }
    }
}

const products = []

const newProducto = new ProductManager();
newProducto.addProduct("Vestido rojo", "Vestido color rojo con piedritas plateadas", 234, "www.url.de.un.vestido.com", 2342, 3);

newProducto.addProduct("Vestido azul", "Vestido color azul con flores", 789, "www.url.de.un.vestido.com", 5322, 1);

newProducto.addProduct("Vestido rojo", "Vestido color rojo con piedritas plateadas", 234, "www.url.de.un.vestido.com", 2342, 3);

newProducto.getProducts();

newProducto.getProductById(3); 

//newProducto.addProduct("", "Playera tipo polo azul", 580, "www.url.fake.imaginacion.com", 1522, 1);