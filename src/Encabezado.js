import './Encabezado.css';

function Encabezado({ modoDia, cambiarModo }) {
  return (
    <header className="encabezado">
      <h1>{modoDia ? '☀️ Modo Día' : '🌙 Modo Noche'}</h1>
      <p>Haz clic en el botón para cambiar el tema de la página.</p>
    </header>
  );
}

export default Encabezado;





