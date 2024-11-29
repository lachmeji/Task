import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState('priority'); 

 
  useEffect(() => {
  
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const fetchedTasks = response.data.slice(0, 10).map(task => ({
          id: task.id,
          title: task.title,
          description: task.body,
          priority: '中', 
          status: '待办', 
        }));
        setTasks(fetchedTasks);
      });
  }, []);

  
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

 
  const sortTasks = (tasks, order) => {
    return tasks.sort((a, b) => {
      if (order === 'priority') {
        return a.priority.localeCompare(b.priority);
      } else if (order === 'status') {
        return a.status.localeCompare(b.status);
      }
    });
  };

  return (
    <div className="task-list">
      <h2>任务列表</h2>
      <button onClick={() => setSortOrder('priority')}>按优先级排序</button>
      <button onClick={() => setSortOrder('status')}>按状态排序</button>
      <ul>
        {sortTasks(tasks, sortOrder).map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
            <button onClick={() => handleDelete(task.id)}>删除</button>
          </li>
        ))}
      </ul>
      <Link to="/create">创建新任务</Link>
    </div>
  );
};

export default TaskList;
