function carregaValor(){
    let produto = document.querySelector("#produtoSelect")
    let compra = document.querySelector("#comprar");
    console.log(compra.value)
    if(produto.value == "Mouse"){
        document.querySelector("#comprar").value = "R$ 99,99";
    }else if(produto.value == "Teclado"){
        document.querySelector("#comprar").value = "R$ 149.99";
    }else if(produto.value == "Gabinete"){
        document.querySelector("#comprar").value = "R$ 559.99";
    }else if(produto.value == "Fonte"){
        document.querySelector("#comprar").value = "R$ 330,99";
    }else if(produto.value == "Monitor"){
        document.querySelector("#comprar").value = "R$ 1050,99";
    }
    console.log(compra.value)

};
