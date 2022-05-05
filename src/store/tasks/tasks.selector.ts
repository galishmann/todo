import { tasksReducerPath } from "./tasks.reducer";


const selector = (state) => state[tasksReducerPath];

export const getTasksList = (state) => selector(state).list;
export const getTasksLoadingStatus = (state) => selector(state).status;
