class ProductManager {
    constructor() {
      this.productos = [];
      this.productoIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
      
        const productoExiste = this.productos.find((producto) => producto.code === code)

        if (productoExiste) {
            console.log(`El producto ${productoExiste.title}  ya existe`);
            return
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`Debes completar todos los campos para agregar un producto ${title}`);

        } else {      
                  
            const ProductoAgregado = {
            id: this.productoIdCounter++,
            title: producto.title,
            description: producto.description,
            price: producto.price,
            thumbnail: producto.thumbnail,
            code: producto.code,
            stock: producto.stock
        };
  
      this.productos.push(ProductoAgregado);
    }
    }
    
    isValidProduct(producto) {
      return (
        producto.title &&
        producto.description &&
        producto.price &&
        producto.thumbnail &&
        producto.code &&
        producto.stock
      );
    }
  
    isCodeDuplicate(code) {
      return this.productos.some(producto => producto.code === code);
    }
  
    getProducts() {
      return this.productos;
    }
  
    getProductById(id) {
        const producto = this.productos.find(producto => producto.id === id);
    
        if (!producto) {
          throw new Error("El producto no se encuentra");
        }
    
        return producto;
      }
    }



//Proceso de Testing 

const productManager = new ProductManager();
console.log(productManager.getProducts()); 

// const producto = {
//   title: "Producto prueba",
//   description: "Este es un producto prueba",
//   price: 200,
//   thumbnail: "Sin imagen",
//   code: "abc123",
//   stock: 25
// };

// productManager.addProduct(product);
// console.log(productManager.getProducts());


// productManager.addProduct(product); 

// try {
//     console.log(productManager.getProductById(2));
//   } catch (error) {
//     console.log(error.message);
//  }
    
// try {
//     console.log(productManager.getProductById(1)); 
//   } catch (error) {
//     console.log(error.message);
//  }
