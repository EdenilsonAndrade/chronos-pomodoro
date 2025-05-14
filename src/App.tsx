import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium
        illum pariatur corrupti iste est soluta ut, nam officiis sint, odit quos
        nihil at, aut obcaecati sunt quas? Dolore, sapiente.
      </p>
    </>
  );
}
