async function CargarMenu() {
    try{
        const response = await fetch("http://34.205.226.226/api/productos");
        const productos = await response.json();

        productos.forEach(p => {
            document.write(p.nombre);
            document.write("<br>");
            document.write(p.descripcion);
            document.write("<br>");
            document.write("S/."+p.precio);
            document.write("<br><br>");
        });
    }catch (err) {
        console.error("Error al cargar menu: ",err);
    }
}

CargarMenu();