const getPrecio = require('./productoPrecio');

test('verificar-precio-producto-no-negativo', () => {
    class Producto{
        constructor(nombreProd, precioProd, stockProd, descripcionProd){
            this.nombre = nombreProd;
            this.precio = precioProd;
            this.stock = stockProd;
            this.descripcion = descripcionProd;
        }
    }
    var producto1 = new Producto("lapicera",12,1,"asd");
    expect(getPrecio(producto1)).toBeGreaterThan(0);
  });