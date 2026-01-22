
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Título de la tarjeta</h2>
      <p className={styles.description}>
        Esta es una descripción corta de la tarjeta.
      </p>
      <button className={styles.button}>
        No tocar Card
      </button>
    </div>
  );
}

export default Card;