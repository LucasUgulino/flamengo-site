// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center',
      padding: '1rem',
      marginTop: 'auto'
    }}>
      &copy; {new Date().getFullYear()} Clube de Regatas do Flamengo — Maior do Mundo!
    </footer>
  );
}