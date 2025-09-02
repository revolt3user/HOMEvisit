import styles from "./Navbar.module.css"

export default function Navbar(){
    return (<>
    <header id={styles.parent}>
        <div className={styles.logo}>TuHogar 360°</div>
            <nav className={styles.navLinks}>
                <ul>
                    <li><a href="#">Inmobiliarias</a></li>
                    <li><a href="#">Casas/Apartamentos</a></li>
                    <li><a href="#">Arriendo</a></li>
                    <li><a href="#">Venta</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        <a href="#" className="btn">Comenzar</a>
    </header>
    </>)
}
