const verificarExistenciaStock = require('./verificarExistenciaStock');



describe("validarCantidad", () => {
    it('Si el producto no tiene stock, no debe figurar', () => {
    
        
    class Producto {


        constructor(nombre,stock,detalle){
            this.nombre=nombre
            this.stock=stock 
            this.detalle=detalle 

        }
    }
    lapiceras = new Producto("lapiceras",0,"blablabla")
        
    expect(verificarExistenciaStock(lapiceras)).toBeUndefined();
    })
})  