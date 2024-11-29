import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setTask({
          id: response.data.id,
          title: response.data.title,
          description: response.data.body,
          priority: '中', 
          status: '待办', 
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    // 模拟保存任务
    console.log('保存任务:', task);
    navigate('/');
  };

  if (!task) return <div>加载中...</div>;

  return (
    <div className="task-details">
      <h2>任务详情</h2>
      <div>
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
      </div>
      <button onClick={handleSave}>保存任务</button>
    </div>
  );
};

export default TaskDetails;
