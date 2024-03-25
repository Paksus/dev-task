import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TaskList = (props) => {
  let [tasks, setTasks] = useState(props.sampleTasks);

  const handleCheckbox = (index) => {
    let newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleClick = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const taskElements = tasks.map((task, index) => (
    <li
      key={index}
      style={
        task.completed
          ? { textDecoration: 'line-through', color: 'red' }
          : { textDecoration: 'none', color: 'green' }
      }
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleCheckbox(index)}
      />
      {task.text}
      <button onClick={() => handleClick(index)}>Remove</button>
    </li>
  ));

  return <ol>{taskElements}</ol>;
};
TaskList.propTypes = {
  sampleTasks: PropTypes.array.isRequired,
};
export default TaskList;
