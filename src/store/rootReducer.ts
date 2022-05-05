import { combineReducers } from "redux";
import { tasksReducer, tasksReducerPath } from "./tasks/tasks.reducer";


export default combineReducers({
  [tasksReducerPath]: tasksReducer,
});
