import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Entenda como funciona a técnica de pomodoro
      </RouterLink>
      <a
        href='https://www.linkedin.com/in/edenilson-de-andrade-276881110/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Chronos Pomodoro &copy; {new Date().getFullYear()} — Desenvolvido por
        Edenilson de Andrade
      </a>
    </footer>
  );
}
