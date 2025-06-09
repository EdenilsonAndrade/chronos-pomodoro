import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

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
      <RouterLink
        className={styles.menuLink}
        href='/'
        aria-label='Home'
        title='Home'
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='/history'
        aria-label='Histórico'
        title='Hitórico'
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='/settings'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='#'
        aria-label='Tema'
        title='Tema'
        onClick={handleTheme}
      >
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  );
}
