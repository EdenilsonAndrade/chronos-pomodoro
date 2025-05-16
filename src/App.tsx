import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <section>LOGO</section>
      </Container>
      <Container>
        <section>MENU</section>
      </Container>
      <Container>
        <section>FORM</section>
      </Container>
      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
