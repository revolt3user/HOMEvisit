import styles from './Footer.module.css';
export default function Footer() {
    return (  <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSectionAbout}>
            <h3>TuHogar 360°</h3>
            <p>Encuentra la propiedad ideal para ti. Ofrecemos las mejores opciones para compra, venta y arriendo de inmuebles en Colombia.</p>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className={styles.footerSectionLinks}>
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#">Acerca de Nosotros</a></li>
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Términos de Servicio</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div className={styles.footerSectionContact}>
            <h3>Contacto</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Cra 25 # 10-35, Bucaramanga</li>
              <li><i className="fas fa-phone"></i> +57 320 123 4567</li>
              <li><i className="fas fa-envelope"></i> info@tuhogar360.com</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          &copy; 2025 TuHogar 360°. Todos los derechos reservados.
        </div>
      </footer>)
}