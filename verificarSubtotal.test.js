const getPrecioFinal = require('./verificarSubtotal');


describe("get precio final ", () => {
    it('si el precio final del stock coicide con los productos comprados, es valido', () => {
    
        var carrito = new Array()
        var PrecioFinal
        var contador
        function carritoNuevo(){
        
            carrito=[];
            PrecioFinal=0
            contador=0
        }
        function addProducto(producto,cantidad){
        
            carrito[contador]=producto.nombre
            contador++
            PrecioFinal+=(producto.precio)*cantidad
        }
        class Producto {
            nombre
            stock
            precio
            constructor(nombre,stock,precio){
                this.nombre=nombre
                this.stock=stock 
                this.precio=precio 
            }
        }        

        carritoNuevo();
        Hoja = new Producto("Hoja",15,400)
        Hoja2 = new Producto("Hoja2",35,324)
        
        addProducto(Hoja,2)
        addProducto(Hoja2,4)
        var suma=(2*400)+(4*324)
    expect(getPrecioFinal()).toBe(suma);
    })
})  