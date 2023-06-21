const conn = require('../db/conn')

class Pedido{
    constructor(itemPedido){
        this.itemPedido = itemPedido;
    }
    save(){
        const user = conn.db().collection('pedido').insertOne({
            itemPedido: this.itemPedido
            
        })
        console.log("Pedido salvo")
        return user;

    }

    static getPedido(){
        const users = conn.db().collection('pedido').find().toArray()
        console.log('Pedidos listados')
        return users;
    }
    

}
module.exports = Pedido