import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function BarraNavegacion({  }) {
  const navigate = useNavigate();

  return (
    <header className="barra">
      <div className="barra-logo" onClick={() => navigate("/")}>
        <img src="/logo.svg" alt="Logo Hermanos Jota" />
      </div>

      <div className="barra-nombre">
        <h2>Mueblería Hermanos Jota</h2>
      </div>

      <nav className="barra-links">
        <a onClick={() => navigate("/")}>Inicio</a>
        <a onClick={() => navigate("/catalogo")}>Catálogo</a>
        <a onClick={() => navigate("/contacto")}>Contacto</a>
      </nav>
    </header>
  );
}