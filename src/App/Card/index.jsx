import styles from "./Card.module.css";
// Recibe los parámetros como props
export default function Card({ image, title, description, onClick }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <div className={styles.cardContent}>
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={onClick}>Ver más</button>
            </div>
        </div>
    );
}

// Ejemplo de uso:
// <Card
//   image="CASASYAPARTAMENTOS/1/WhatsApp-Image-2025-06-06-at-11.03.15-AM-1-576x650.jpeg"
//   title="Casa Moderna en Bucaramanga"
//   description="3 habitaciones, 2 baños, sala amplia y cocina integral. Cerca a centros comerciales."
//   onClick={() => { /* acción al hacer clic */ }}
// />
