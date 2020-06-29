class Producto {


    constructor(nombre,stock,detalle){
        this.nombre=nombre
        this.stock=stock 
        this.detalle=detalle 

    }
}


function verificarExistenciaStock(producto){

    
    if(producto.stock>0){
        return producto
    }else{
        return undefined
    }



}

module.exports = verificarExistenciaStock