BDproductos=[];
mostrarLista();
//console.log(BDproductos);

function mostrarLista(){
    for(let i=0; i< BDproductos.length; i++){
        document.getElementById("tablaDatos").innerHTML += '<tbody><td>'+BDproductos[i].pedido+'</td><td>'+BDproductos[i].cantidad+'</td><td>'+BDproductos[i].producto+'</td><td>'+BDproductos[i].valor+'</td><td><a href="#" class="btn btn-danger" type="reset" onclick="eliminar()">Eliminar</a></td></tbody>';
    }
}

function capturarDatos(){
    function productoCompleto(pedido, cantidad, producto, valor){
        this.pedido=pedido;
        this.cantidad=cantidad;
        this.producto=producto;
        this.valor=valor;
    }
    var pedidoCapturado= document.getElementById("pedido").value;
    var cantidadCapturado= document.getElementById("cantidad").value;
    var productoCapturado= document.getElementById("producto").value;
    var valorCapturado= document.getElementById("valor").value;

    nuevoProducto= new productoCompleto(pedidoCapturado, cantidadCapturado, productoCapturado, valorCapturado);
    agregarProductos();
}

function agregarProductos(){
    BDproductos.push(nuevoProducto);
    mostrarLista();
}

function eliminar(pedido){
    BDproductos.splice(pedido, 1);
    mostrarLista();
}