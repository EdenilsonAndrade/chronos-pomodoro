import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';
export function loadBeep() {
  const audion = new Audio(gravitationalBeep);
  audion.load();

  return () => {
    audion.currentTime = 0;
    audion.play().catch(error => console.log('Erro ao tocar audio:', error));
  };
}
