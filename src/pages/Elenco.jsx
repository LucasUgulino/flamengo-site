import styles from './css/Elenco.module.css';
import JogadorCard from "../components/JogadorCard";
import felipe from '../assets/images/felipe.jpeg';
import pedro from '../assets/images/pedro.jpg';
import brunoHenrique from '../assets/images/brunoHenrique.jpg';
import arrascaeta from '../assets/images/arrascaeta.jpg';


export default function Elenco() {
  const jogadores = [
    {
      nome: 'Pedro',
      posicao: 'Atacante',
      numero: '9',
      imagem: pedro
    },
    {
      nome: 'Bruno Henrique',
      posicao: 'Atacante',
      numero: '27',
      imagem: brunoHenrique
    },
    {
      nome: 'Arrascaeta',
      posicao: 'Meia',
      numero: '14',
      imagem: arrascaeta
    },
    
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>O Trio da Temporada</h1>
        <p className={styles.subtitle}>Temporada 2025/2026</p>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.teamInfo}>
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>👑</div>
          <div>
            <div className={styles.infoNumber}>1</div>
            <div className={styles.infoLabel}>Copa do Brasil</div>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>🏆</div>
          <div>
            <div className={styles.infoNumber}>1</div>
            <div className={styles.infoLabel}>Brasileirão</div>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>⭐</div>
          <div>
            <div className={styles.infoNumber}>19</div>
            <div className={styles.infoLabel}>Convocatórias</div>
          </div>
        </div>
         <div className={styles.infoItem}>
          <div className={styles.infoIcon}>🏆</div>
          <div>
            <div className={styles.infoNumber}>1</div>
            <div className={styles.infoLabel}>Libertadores</div>
          </div>
        </div>
      </div>

      <div className={styles.playersGrid}>
        {jogadores.map((jogador, index) => (
        <JogadorCard 
        key={index} 
        nome={jogador.nome} 
        posicao={jogador.posicao} 
        numero={jogador.numero} 
        imagem={jogador.imagem} 
        />
        ))}
      </div>

      <div className={styles.coachSection}>
        <div className={styles.coachImageContainer}>
        <img
        src={felipe}
        alt="Técnico Felipe"
        className={styles.coachImage}
        />
        </div>
        <div className={styles.coachInfo}>
          <h2 className={styles.coachName}>Técnico: Filipe Luís</h2>
          <p className={styles.coachBio}>
            Filipe Luís, assumiu o comando do Flamengo em 2024. 
            Mesmo sendo seu primeiro time profissional, busca levar o clube a novos patamares de 
            excelência técnica e tática.
          </p>
          <div className={styles.coachAchievements}>
            <div className={styles.achievement}>🏆 2x Copa do Brasil</div>
            <div className={styles.achievement}>🏆 1x Campeonato Brasileiro</div>
            <div className={styles.achievement}>🏆 1x Libertadores</div>
          </div>
        </div>
      </div>
    </div>
  );
}