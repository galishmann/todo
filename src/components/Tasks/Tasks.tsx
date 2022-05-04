import React from 'react';

import Task from '../Task/Task';


const cssPrefix = 'Tasks';

const tasks = [
  { id: 1, title: 'First task', date: 1, completed: false },
  { id: 2, title: 'Second task', date: 2, completed: true },
  { id: 3, title: 'Third task', date: 3, completed: false },
]

class Tasks extends React.PureComponent {
  render() {
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
