import React from 'react';
import { TaskType } from '../../types/Task';


interface Props {
  task: TaskType,
}

const cssPrefix = 'Task';

class Task extends React.PureComponent<Props> {
  render() {
    const { title } = this.props.task;

    return (
      <div className={cssPrefix}>
        <p>{title}</p>
      </div>
    );
  }
}

export default Task;
