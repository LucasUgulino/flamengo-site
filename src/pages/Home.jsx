// src/pages/Home.jsx
import styles from './css/Home.module.css';
import { Link } from 'react-router-dom';
import flamengoLogo from '../assets/images/flamengo-logo.png';
import flamengoPattern from '../assets/images/flamengo-pattern.jpg';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}
      style={{
        backgroundImage: `url(${flamengoPattern})`,
      }}
      
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.redText}>Maior do Mundo</span>
            <br />
            <span className={styles.blackText}>Desde 1895</span>
          </h1>
          <p className={styles.heroSubtitle}>
            O Clube de Regatas do Flamengo é a paixão de milhões de brasileiros.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/historia" className={styles.buttonPrimary}>
              Nossa História
            </Link>
            <Link to="/elenco" className={styles.buttonSecondary}>
              Conheça o Elenco
            </Link>
          </div>
        </div>
        <img 
          src={flamengoLogo} 
          alt="Escudo do Flamengo" 
          className={styles.heroLogo}
        />
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>9</div>
          <div className={styles.statLabel}>Títulos Brasileiros</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>1</div>
          <div className={styles.statLabel}>Mundial</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>4</div>
          <div className={styles.statLabel}>Libertadores</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>38</div>
          <div className={styles.statLabel}>Estaduais</div>
        </div>
      
        </div>
      </div>
  );
}