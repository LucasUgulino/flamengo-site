// src/components/Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#c2081a', // Vermelho do Flamengo
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* LOGO DO FLAMENGO + NOME DO CLUBE */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: '12px'
      }}>
       
        <h1 style={{ 
          fontWeight: 'bold', 
          fontSize: '1.8rem',
          margin: 0,
          color: '#ffcc00', // Dourado do escudo
          textShadow: '0 2px 3px rgba(0,0,0,0.5)'
        }}>
          CR Flamengo
        </h1>
      </div>

      {/* MENU DE NAVEGAÇÃO */}
      <nav>
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link 
              to="/" 
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.backgroundColor = '#a00614'}
              onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/historia" 
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.backgroundColor = '#a00614'}
              onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
            >
              História
            </Link>
          </li>
          <li>
            <Link 
              to="/elenco" 
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.backgroundColor = '#a00614'}
              onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
            >
              Elenco
            </Link>
          </li>
          <li>
            <Link 
              to="/contato" 
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.backgroundColor = '#a00614'}
              onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}