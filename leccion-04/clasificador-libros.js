function agregarLibro(titulo)
{
    // Si titulo del libro a agregar diferente de string o string vacio, return error
    if (typeof titulo!=='string' || titulo==="")
    {
        console.error("El título del libro debe ser un texto no vacío.");
        return;
    }
    // Si el titulo es valido agregar a la lista
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos()
{
    console.log("Libros que he leído:");
    // Si la lista esta vacia, escribir en consola que no hay libros registrados
    if (librosLeidos.length === 0)
    {
        console.log("No se ha registrado ningún libro.");
        return;
    }
    // Ciclo para mostrar lista de libros Leidos
    for (let i = 0; i < librosLeidos.length; i++)
    {
        let libro = librosLeidos [i];
        console.log(`${i+1}. ${libro}`);
    }
}



const librosLeidos = [];

mostrarLibrosLeidos(); // Mostrar lista vacia, regresa "No se ha registrado ningún libro."

agregarLibro("Awaken the giant within");
agregarLibro("Atomic habits");
agregarLibro("Building a 2nd Brain. Tiago Forte");
agregarLibro("Art of war");
agregarLibro("4hr WorkWeek");
agregarLibro("Influence");
agregarLibro("48 laws power");
agregarLibro("Marco Aurelio-Meditaciones");

mostrarLibrosLeidos();
