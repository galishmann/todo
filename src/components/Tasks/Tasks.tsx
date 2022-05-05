import React from 'react';
import { TaskType } from '../../types/TaskType';

import Task from '../Task/Task.container';


interface Props {
  tasks: TaskType[],
  loadTasks: () => void,
}

const cssPrefix = 'Tasks';

class Tasks extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.loadTasks();
  }

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
