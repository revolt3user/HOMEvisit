import styles from "./App.module.css"
import Footer from "../Components/Footer"
import Card from "./Card"
import Navbar from '../Components/Navbar'
function App() {
  return (
    <>
      <title>TuHogar 360°</title>
      <Navbar />

      <section className={[styles.hero, styles.section].join(" ")}>
        <div className={styles.heroText}>
          <h1>El Hogar de Tus Sueños lo Encuentras Aquí</h1>
          <p>Compra, vende o arrienda propiedades de manera fácil y segura.</p>
        </div>
      </section>

      <section className={[styles.featuredHomes, styles.section].join(" ")}>
        <h2>Las más Destacadas</h2>
        <div className={styles.grid}>
          
          <Card
            image="CASASYAPARTAMENTOS/casa.jpg"
            title="Casa Familiar en Girón"
            description="4 habitaciones, 3 baños, patio amplio y parqueadero. Zona tranquila y segura."
            
            onClick={() => { /* acción al hacer clic */ }}
            />

          <Card
            image="CASASYAPARTAMENTOS/2/WhatsApp-Image-2021-07-30-at-11.02.09-AM-1.jpeg"
            title="Apartamento Real de Minas"
            description="2 habitaciones, 2 baños, Zona tranquila."
            onClick={() => { /* acción al hacer clic */ }}
          />
          <Card
            image="CASASYAPARTAMENTOS/3/WhatsApp-Image-2025-04-11-at-10.24.01-AM-1-720x650.jpeg"
            title="Apartamento en Floridablanca"
            description="2 habitaciones, 2 baños, balcón con vista panorámica y zonas sociales."
            onClick={() => { /* acción al hacer clic */ }}
          />

        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
