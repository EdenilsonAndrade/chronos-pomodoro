import { useEffect, useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContex';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  type ActionType = {
    type: string;
    payload?: number;
  };

  const [myState, dispatch] = useReducer(
    (state, action: ActionType) => {
      console.log(state, action);

      switch (action.type) {
        case 'INCREMET':
          return {
            ...state,
            secondsRemaing: state.secondsRemaing + (action.payload || 0),
          };
        case 'DECREMENT':
          return {
            ...state,
            secondsRemaing: state.secondsRemaing - (action.payload || 0),
          };
        case 'RESET':
          return { secondsRemaing: 0 };
        default:
          return state;
      }

      return state;
    },
    { secondsRemaing: 0 },
  );

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>O estado é: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: 'INCREMET', payload: 10 })}>
        Incrementar + 10
      </button>
      <button onClick={() => dispatch({ type: 'INCREMET', payload: 20 })}>
        Incrementar + 20
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 50 })}>
        Incrementar - 50
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
    </TaskContext.Provider>
  );
}
