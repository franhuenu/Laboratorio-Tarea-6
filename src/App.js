// Importamos las dependencias necesarias desde React y los archivos locales
import React, { useState, useEffect } from 'react';
import './App.css';
import Encabezado from './Encabezado';
import Contenedor from './Contenedor';
import Boton from './Boton';

function App() {
  // Estado para controlar si el modo actual es día (true) o noche (false)
  const [modoDia, setModoDia] = useState(true);

  useEffect(() => {
     // useEffect que se ejecuta al cargar la app, para recuperar el modo guardado en localStorage
    const guardado = localStorage.getItem('modoDia');
    if (guardado !== null) {
      setModoDia(JSON.parse(guardado)); // Convierte el valor guardado (string) a booleano
    }
  }, []);

  // useEffect que guarda el modo actual en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('modoDia', JSON.stringify(modoDia));
  }, [modoDia]);

  // Función que invierte el estado actual (cambia entre modo día y modo noche)
  const cambiarModo = () => {
    setModoDia(!modoDia);
  };

    // Render principal de la aplicación
  return (
    <div className={`App ${modoDia ? 'dia' : 'noche'}`}>
      {/* Componente del encabezado: muestra el título y el botón de cambio de modo */}
      <Encabezado modoDia={modoDia} cambiarModo={cambiarModo} />

      {/* Contenedor principal: muestra el contenido central de la página */}
      <Contenedor modoDia={modoDia} />

      {/* Botón independiente para cambiar el modo */}
      <Boton cambiarModo={cambiarModo} modoDia={modoDia} />

      {/* Pie de página con el año actual y el modo activo */}
      <footer className="footer">
        © {new Date().getFullYear()} El Artesano — Modo {modoDia ? 'Día' : 'Noche'}
      </footer>
    </div>
  );
}

// Exportamos el componente principal para que pueda usarse en otros archivos
export default App;
