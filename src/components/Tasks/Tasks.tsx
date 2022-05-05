import React from 'react';
import { TaskType } from '../../types/TaskType';

import Task from '../Task/Task';


interface Props {
  tasks: TaskType[],
}

const cssPrefix = 'Tasks';

class Tasks extends React.PureComponent<Props> {
  render() {
    const { tasks } = this.props;

    return (
      <div className={cssPrefix}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  }
}

export default Tasks;
