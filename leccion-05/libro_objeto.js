class Libro
{
    constructor(titulo, autor, anio, estado)
    {
      this.titulo = titulo;
      this.autor = autor;
      this.anio = anio;
      this.estado = estado;
      this.capitulos = [];
    }
  
    describirLibro()
    {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }

    agregarCapitulo(capitulo)
    {
      this.capitulos.push(capitulo);
    }
  
    eliminarCapitulo(capitulo)
    {
      const index = this.capitulos.indexOf(capitulo);
      if (index !== -1)
        {
        this.capitulos.splice(index, 1);
      }
    }
  }
  // Crear instancia del libro "Awaken the Giant Within" de Anthony Robbins
  const libro1 = new Libro("Awaken the Giant Within", "Anthony Robbins", 1991, "disponible");

  libro1.describirLibro();
  