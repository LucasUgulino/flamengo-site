// src/components/JogadorCard.jsx
import styles from '../pages/css/Elenco.module.css';

export default function JogadorCard({ nome, posicao, numero, imagem }) {
  return (
    <div className={styles.playerCard}>
      <div className={styles.playerImageContainer}>
        <img 
          src={imagem} 
          alt={nome} 
          className={styles.playerImage}
        />
        <div className={styles.playerNumber}>{numero}</div>
      </div>
      <div className={styles.playerInfo}>
        <h3 className={styles.playerName}>{nome}</h3>
        <div className={styles.playerPosition}>{posicao}</div>
      </div>
      <a href="#" className={styles.playerStats}>
        Ver estatísticas
      </a>
    </div>
  );
}