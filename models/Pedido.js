const conn = require('../db/conn')

class Pedido{
    constructor(itemPedido){
        this.itemPedido = itemPedido;
    }
    save(){
        const pedido = conn.db().collection('pedido').insertOne({
            itemPedido: this.itemPedido
            
        })
        return pedido;

    }

    static getPedido(){
        const pedido = conn.db().collection('pedido').find().toArray()
        return pedido;
    }
    
    static deletePedido(id){
        const pedido = conn.db().collection('pedido').deleteOne(id)
        return pedido;
    }

}
module.exports = Pedido