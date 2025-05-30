import type { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionType, type TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionType.START_TASK:
      return state;
    case TaskActionType.INTERRUPT_TASK:
      return state;
    case TaskActionType.RESET_STATE:
      return state;
    default:
      return state;
  }
}
