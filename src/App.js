import React from 'react';
import ErrorBoundary from './ErrorBoundary'; 
import TaskList from './Tasklist'; 
import TaskDetails from './TaskDetails';
import TaskForm from './TaskForm'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ErrorBoundary> 
      <Router>
        <Routes>
        <Route path="/" element={<TaskList />} /> 
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
