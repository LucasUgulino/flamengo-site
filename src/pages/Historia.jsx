import styles from './css/Historia.module.css';

export default function Historia() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nossa História</h1>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>1895</div>
          <div className={styles.timelineContent}>
            <h2>Fundação</h2>
            <p>O Clube de Regatas do Flamengo foi fundado em 17 de novembro de 1895 por um grupo de remadores no bairro de Flamengo, Rio de Janeiro.</p>
          </div>
        </div>
        
        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>1911</div>
          <div className={styles.timelineContent}>
            <h2>Chegada do Futebol</h2>
            <p>O Flamengo adota oficialmente o futebol após a fusão com o Grupo de Regatas Riachuelo, conquistando seu primeiro título em 1914.</p>
          </div>
        </div>
        
        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>1981</div>
          <div className={styles.timelineContent}>
            <h2>Primeiro Mundial</h2>
            <p>Sob o comando de Zico, o Flamengo conquista seu primeiro título mundial ao derrotar o Liverpool por 3-0 no Japão.</p>
          </div>
        </div>
        
        <div className={styles.timelineItem}>
          <div className={styles.timelineYear}>2019</div>
          <div className={styles.timelineContent}>
            <h2>Libertadores</h2>
            <p>O Flamengo conquista sua segunda Libertadores após 38 anos, com uma vitória dramática sobre o River Plate em Lima.</p>
          </div>
        </div>
      </div>
    </div>
  );
}