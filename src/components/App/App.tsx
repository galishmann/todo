import React from 'react';

import Tasks from '../Tasks/Tasks';


const cssPrefix = 'App';


class App extends React.PureComponent {
  render() {
    return (
      <div className={cssPrefix}>
        <Tasks />
      </div>
    );
  }
}

export default App;
