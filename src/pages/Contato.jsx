import styles from './css/Contato.module.css';
import { useState } from 'react';
import flamengoPattern from '../assets/images/flamengo-pattern.jpg';

export default function Contato() {
  
   const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Responderemos em breve.');
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}
      style={{ backgroundImage: `url(${flamengoPattern})`}}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Fale Conosco</h1>
          <p className={styles.heroSubtitle}>
            Entre em contato com o Maior do Mundo
          </p>
        </div>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🏟️</div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Estádio</h3>
              <p className={styles.infoText}>
                Estádio do Maracanã<br />
                Rio de Janeiro, RJ<br />
                Brasil
              </p>
            </div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📧</div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>E-mail</h3>
              <p className={styles.infoText}>
                contato@flamengo.com.br<br />
                imprensa@flamengo.com.br<br />
                sociotorcedor@flamengo.com.br
              </p>
            </div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📱</div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Redes Sociais</h3>
              <div className={styles.socialLinks}>
                <a href="https://instagram.com/flamengo" target="_blank" rel="noreferrer" className={styles.socialLink}>Instagram</a>
                <a href="https://twitter.com/flamengo" target="_blank" rel="noreferrer" className={styles.socialLink}>Twitter</a>
                <a href="https://facebook.com/flamengo" target="_blank" rel="noreferrer" className={styles.socialLink}>Facebook</a>
              </div>
            </div>
          </div>
          
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.102036559589!2d-43.22991732424639!3d-22.912497738163774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e1bb3a6c0%3A0xf264f6c5a5a0e6a2!2sEst%C3%A1dio%20do%20Maracan%C3%A3!5e0!3m2!1spt-BR!2sbr!4v1701886044101!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Mapa do Maracanã"
            ></iframe>
          </div>
        </div>
        
        <div className={styles.contactForm}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Envie sua Mensagem</h2>
            <p className={styles.formSubtitle}>Responderemos em até 48 horas</p>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="nome" className={styles.formLabel}>Nome Completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="assunto" className={styles.formLabel}>Assunto</label>
              <select
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                className={styles.formSelect}
              >
                <option value="">Selecione um assunto</option>
                <option value="ingressos">Ingressos</option>
                <option value="socio">Sócio Torcedor</option>
                <option value="imprensa">Imprensa</option>
                <option value="marketing">Marketing</option>
                <option value="outros">Outros Assuntos</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="mensagem" className={styles.formLabel}>Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="5"
                className={styles.formTextarea}
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}