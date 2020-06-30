const carrito = require('./carritoUsuario');

test('verificar cantidad productos carrito', () => {
    class Carrito {
        constructor(usuarioCarrito) {
            this.usuario = usuarioCarrito;
            this.montoTotal = 0;
            this.items = [];
        }

        addItems(producto, cant) {
            let subtotal = producto.precio * cant;
            this.items.push([producto, cant, subtotal]);
        }
    }
    class Producto {
        constructor(name, precioP, stockP, descipP) {
            this.nombre = name;
            this.precio = precioP;
            this.stock = stockP;
            this.descripcion = descipP;
        }
    }
    var prod1 = new Producto('cartulina', 150, 10, 'papel de color');
    var carrito1 = new Carrito("martin");
    carrito1.addItems(prod1, 5);
    expect(carrito.verificarCantidadItem(carrito1)).toBe(true);
});