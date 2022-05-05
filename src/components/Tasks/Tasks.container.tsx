import { connect } from "react-redux";

import { loadTasks } from "../../store/tasks/tasks.actions";
import { getTasksList, getTasksLoadingStatus } from "../../store/tasks/tasks.selector";

import Tasks from "./Tasks";


export default connect(
  (state) => ({
    tasks: getTasksList(state),
    status: getTasksLoadingStatus(state),
  }),
  {
    loadTasks: loadTasks.triggerAC,
  }
)(Tasks);
