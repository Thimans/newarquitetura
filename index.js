const exphbs = require('express-handlebars');
const express = require('express')
const app = express()
const Pedido = require('./models/Pedido')
const Produto = require('./models/Produto')

app.use('/public', express.static(__dirname + '/public'))
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: false}))

app.get('/', async(req, res) => {
  var pedido = await Pedido.getPedido();
  console.log(pedido);
  
  res.render('index',{pedido});
})

app.post('/pedir',async function(req,res){
  const itemNome = req.body.itemNome
  const itemValor = req.body.itemValor
  

  console.log("Item Pedido: "+itemNome)
  console.log("Item Valor: "+itemValor)
  if(itemNome != ""){
    const produto = new Produto(itemNome,itemValor)
    const pedido = new Pedido(produto)

    console.log(pedido)
    pedido.save()
  }
  
  var pedido = await Pedido.getPedido();
  res.render('index',{
    pedido : pedido
  });
  
})

app.listen(3000, () => {
  console.log('Servidor executando em http://localhost:3000')
})