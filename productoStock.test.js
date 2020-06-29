const getStock = require('./productoStock');

test('verificar-stock-producto-no-negativo', () => {
    class Producto{
        constructor(nombreProd, precioProd, stockProd, descripcionProd){
            this.nombre = nombreProd;
            this.precio = precioProd;
            this.stock = stockProd;
            this.descripcion = descripcionProd;
        }
    }
    var producto1 = new Producto("lapicera",12,234,"asd");
    expect(getStock(producto1)).toBeGreaterThan(0);
  });t