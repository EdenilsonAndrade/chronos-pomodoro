// useReducer <- hook do React que recebe um reducer e um estado inicialAdd commentMore actions
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado

import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionModel =
  | {
      type: TaskActionType.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionType.RESET_STATE;
    }
  | {
      type: TaskActionType.INTERRUPT_TASK;
    };
