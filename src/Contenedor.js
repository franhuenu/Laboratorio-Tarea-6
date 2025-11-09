import './Contenedor.css';

function Contenedor({ modoDia }) {
  return (
    <div className={`contenedor ${modoDia ? 'dia' : 'noche'}`}>
      <p>
        Este es un ejemplo interactivo que permite cambiar entre el modo claro y oscuro
        usando React, Hooks y almacenamiento local.
      </p>
    </div>
  );
}

export default Contenedor;






