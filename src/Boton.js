// Importamos los estilos del botón desde el archivo CSS
import './Boton.css';

// Definimos el componente funcional "Boton"
// Recibe dos propiedades (props):
// - cambiarModo: función que cambia entre modo día y modo noche
// - modoDia: valor booleano (true o false) que indica el modo actual
function Boton({ cambiarModo, modoDia }) {
  return (

    // Creamos un botón HTML con la clase "boton"
    // Cuando el usuario hace clic, se ejecuta la función cambiarModo
    //  Si modoDia es true, muestra el texto de modo noche; si no, muestra modo día 
    <button className="boton" onClick={cambiarModo}>
      {modoDia ? 'Cambiar a modo noche 🌙' : 'Cambiar a modo día ☀️'}
    </button>
  );
}

// Exportamos el componente para poder usarlo en App.js u otros archivos
export default Boton;
