let arrg_productos = [];
let ventas = [];
let dulces_vendidos = [];
let stock_cero = [];

function remove(arreglo, index) {
    return arreglo.slice(0, index).concat(arreglo.slice(index + 1));
}

function controlVentas() {
    let opcion;
    let codigo_p, descripcion_p, tipo_p, precio_michelle, precio_cliente, stock_p;
    let buscador, stock_nuevo;
    let verificador, actualizador, stock_n;

    while (opcion != 6) {
        console.log("******Menu******");
        console.log("1. Agregar producto.");
        console.log("2. Modificar stock.");
        console.log("3. Registrar venta y reducir stock.");
        console.log("4. Mostrar promedio de ventas realizadas.");
        console.log("5. Mostrar productos con stock 0.");
        console.log("6. Salir del sistema.");
        opcion = prompt("Opcion que desea ejecutar: ");

        if (opcion == 1) {
            codigo_p = prompt("Ingrese el codigo del producto: ");
            descripcion_p = prompt("Ingrese la descripcion del producto: ");
            tipo_p = prompt("Ingrese el tipo del producto: ");
            precio_michelle = prompt("Ingrese el precio de compra: ");
            precio_cliente = prompt("Ingrese el precio de venta: ");
            stock_p = prompt("Ingrese el stock del producto: ");
            var producto = {
                codigo: codigo_p,
                descripcion: descripcion_p,
                tipo: tipo_p,
                precio_compra: precio_michelle,
                precio_venta: precio_cliente,
                stock: stock_p
            };
            arrg_productos.push(producto);
        }
        else if (opcion == 2) {
            buscador = prompt("Ingrese el codigo del producto para modificar su stock: ");
            for (let i = 0; i < arrg_productos.length; i++) {
                if (arrg_productos[i].codigo == buscador) {
                    stock_nuevo = prompt("Ingrese el nuevo stock del producto: ");
                    arrg_productos[i].stock = stock_nuevo;
                }
                else {
                    console.log("Persona no encontrada.");
                }
            }
        }
        else if (opcion == 3) {
            for (let i = 0; i < arrg_productos.length; i++) {
                let dulces = prompt("Cuantos dulces " + arrg_productos[i].codigo + " vendio?");
                dulces_vendidos.push(dulces);
            }
            ventas.push(dulces_vendidos);
            console.log(ventas);
            for (let i = 0; i < arrg_productos.length; i++) {
                console.log("stock actual del producto"+ arrg_productos[i].codigo + " es de: "+arrg_productos[i].stock);
            }
        }
        else if (opcion == 4) {

        }
        else if (opcion == 5) {
            for (let i = 0; i < arrg_productos.length; i++) {
                if (arrg_productos[i].stock == 0) {
                    stock_cero.push(arrg_productos[i]);
                    console.log("Los productos con stock en cero son: " + arrg_productos[i].codigo);
                }
                else {
                    console.log("No hay productos con stock en 0");
                }
            }

        }
        else if (typeof opcion != 'number') {
            console.log("Dato no valido.")
        }
    }
}

