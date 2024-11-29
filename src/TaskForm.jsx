import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: '中',
    status: '待办',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('新任务:', task);
    navigate('/');
  };

  return (
    <div className="task-form">
      <h2>创建任务</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={task.title} 
          onChange={handleChange} 
          placeholder="任务标题" 
        />
        <textarea 
          name="description" 
          value={task.description} 
          onChange={handleChange} 
          placeholder="任务描述" 
        />
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="低">低</option>
          <option value="中">中</option>
          <option value="高">高</option>
        </select>
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="待办">待办</option>
          <option value="进行中">进行中</option>
          <option value="已完成">已完成</option>
        </select>
        <button type="submit">保存任务</button>
      </form>
    </div>
  );
};

export default TaskForm;
