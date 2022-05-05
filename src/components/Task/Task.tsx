import React from 'react';
import { TaskType } from '../../types/TaskType';

import './Task.sass';


interface Props {
  task: TaskType,
  completeTask: (number) => void,
}

const cssPrefix = 'Task';

class Task extends React.PureComponent<Props> {
  onChange = () => {
    this.props.completeTask(this.props.task.id);
  }

  render() {
    const { title, completed } = this.props.task;

    return (
      <div className={cssPrefix}>
        <input type="checkbox"  checked={completed} onChange={this.onChange} />
        <span>{title}</span>
      </div>
    );
  }
}

export default Task;
