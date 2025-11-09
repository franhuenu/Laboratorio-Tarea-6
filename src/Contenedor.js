// Importa el archivo de estilos CSS que se aplicará a este componente
import './Contenedor.css';

// Definición del componente funcional 'Contenedor'
// Recibe una prop llamada 'modoDia' que indica si el modo actual es día (true) o noche (false)

/* Contenedor funciona como un contenedor visual flexible que cambia su estilo según la prop modoDia,
 mostrando al usuario un modo claro u oscuro. Es útil en interfaces donde se 
desea implementar temas dinámicos y sirve de ejemplo de cómo combinar React, props y CSS dinámico.*/
function Contenedor({ modoDia }) {
  return (
    // Se crea un <div> con la clase 'contenedor' y una clase adicional que depende de 'modoDia'
    // Si 'modoDia' es true, se añade la clase 'dia'; si es false, se añade la clase 'noche'
    <div className={`contenedor ${modoDia ? 'dia' : 'noche'}`}>
      {/* Este párrafo explica la funcionalidad del componente */}
      <p>
        Este es un ejemplo interactivo que permite cambiar entre el modo claro y oscuro
        usando React, Hooks y almacenamiento local.
      </p>
    </div>
  );
}

// Exporta el componente para poder ser usado en otros archivos de la aplicación
export default Contenedor;







