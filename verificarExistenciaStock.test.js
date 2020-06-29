const verificarExistenciaStock = require('./verificarExistenciaStock');



describe("validarCantidad", () => {
    it('Si el producto no tiene stock, no debe figurar', () => {
    
        
    class Producto {


        constructor(nombre,stock,precio){
            this.nombre=nombre
            this.stock=stock 
            this.precio=precio 

        }
    }
    lapiceras = new Producto("lapiceras",0,1999)
        
    expect(verificarExistenciaStock(lapiceras)).toBeUndefined();
    })
})  