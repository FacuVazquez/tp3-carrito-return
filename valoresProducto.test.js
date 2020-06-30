const getValues = require('./valoresProducto.js');
test('verificar_valores_no_nulos', () => {
    class Producto {
        constructor(nombreProd, precioProd, stockProd, descripcionProd) {
            this.nombre = nombreProd;
            this.precio = precioProd;
            this.stock = stockProd;
            this.descripcion = descripcionProd;
        }
    }
    var prod1 = new Producto('lapiz', 40, 122, 'lapiz negro');
    expect(getValues.getDescripcion(prod1)).toBeDefined();
    expect(getValues.getStock(prod1)).toBeDefined();
    expect(getValues.getName(prod1)).toBeDefined();
});