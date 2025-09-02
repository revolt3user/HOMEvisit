import styles from './InmuebleVenta.module.css';
import { useNavigate } from "react-router-dom";
const InmuebleVenta = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.global}>
      {/* Encabezado */}
      <header className={styles.header}>
        <h1>Inmobiliaria Ejemplo</h1>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Casas</a>
          <a href="#">Apartamentos</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* Contenedor Principal */}
      <main className={styles.container}>
        {/* Galería */}
        <section className={styles.gallery}>
          <img 
            src="https://via.placeholder.com/800x450" 
            alt="Foto principal del inmueble" 
            className={styles.mainPhoto}
          />
          <div className={styles.thumbnails}>
            <img src="https://via.placeholder.com/150x100" alt="Foto 1" />
            <img src="https://via.placeholder.com/150x100" alt="Foto 2" />
            <img src="https://via.placeholder.com/150x100" alt="Foto 3" />
            <img src="https://via.placeholder.com/150x100" alt="Foto 4" />
          </div>
        </section>

        {/* Info del inmueble */}
        <section className={styles.propertyInfo}>
          <h2>Casa en Venta - Corredor Don Diego</h2>
          <p className={styles.price}>$2.690.000.000 COP</p>
          <ul className={styles.details}>
            <li>Área Construida: 232 m²</li>
            <li>Área Privada: 232 m²</li>
            <li>Estrato: 6</li>
            <li>Habitaciones: 3</li>
            <li>Baños: 3</li>
            <li>Parqueaderos: 4</li>
            <li>Administración: $500.000 COP</li>
          </ul>
          <p className={styles.description}>
            Hermosa casa en el sector Corredor Don Diego, con amplios ventanales, 
            excelente iluminación, acabados modernos y rodeada de naturaleza.
          </p>
        </section>

        {/* Contacto */}
        <section className={styles.contact}>
          <h3>¿Te interesa este inmueble?</h3>
          <button className={`${styles.btn} ${styles.whatsapp}`}>Contactar por WhatsApp</button>
          <button onClick={() => navigate("/tour")} className={`${styles.btn} ${styles.email}`}>Tour virtual</button>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Inmobiliaria Ejemplo - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default InmuebleVenta;