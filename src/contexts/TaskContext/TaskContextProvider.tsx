import { useEffect, useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContex';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  const [numero, dispatch] = useReducer((state, action) => {
    console.log(state, action);

    switch (action) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        console.error('Ação desconhecida:', action);
    }
    return state;
  }, 0);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>O número é: {numero}</h1>
      <button onClick={() => dispatch('INCREMENT')}>Incrementar</button>
      <button onClick={() => dispatch('DECREMENT')}>Incrementar</button>
    </TaskContext.Provider>
  );
}
