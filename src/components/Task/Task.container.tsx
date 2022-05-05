import { connect } from "react-redux";

import { completeTask } from "../../store/tasks/tasks.actions";
import Task from "./Task";


export default connect(
  null,
  {
    completeTask: completeTask.triggerAC,
  }
)(Task);