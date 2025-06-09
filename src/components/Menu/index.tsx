import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

type IThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<IThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as IThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleTheme(event: React.MouseEvent) {
    event.preventDefault();
    setTheme((prevTheme: IThemes) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link className={styles.menuLink} to='/' aria-label='Home' title='Home'>
        <HouseIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to='#'
        aria-label='Histórico'
        title='Hitórico'
      >
        <HistoryIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to='#'
        aria-label='Tema'
        title='Tema'
        onClick={handleTheme}
      >
        {nextThemeIcon[theme]}
      </Link>
    </nav>
  );
}
