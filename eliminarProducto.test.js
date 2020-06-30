test('verificar_producto_eliminado', () => {
    class Producto {
        constructor(nombreProd, precioProd, stockProd, descripcionProd) {
            this.nombre = nombreProd;
            this.precio = precioProd;
            this.stock = stockProd;
            this.descripcion = descripcionProd;
        }
    }
    class Carrito {
        constructor(user) {
            this.usuario = user;
            this.montoTotal = 0;
            this.items = [];
        }

        addItems(producto, cant) {
            let subtotal = producto.precio * cant;
            this.items.push([producto, cant, subtotal]);
        }
    }
    var prod1 = new Producto('lapiz', 40, 122, 'lapiz negro');
    var carrito1 = new Carrito("Mica Teot");
    carrito1.addItems(prod1, 2);
    expect(carrito1.items[0][1]).toBeGreaterThan(0);
});