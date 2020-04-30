import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import TaskForm from '../tasks/TaskForm';
import TaskList from '../tasks/TaskList';
import UserContext from '../../context/users/userContext';

function Projects() {
  const { setGetAuthenticatedUser } = useContext(UserContext);

  useEffect(() => {
    setGetAuthenticatedUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-app">
      <Sidebar />
      <div className="section-principal">
        <Bar />
        <main>
          <TaskForm />
          <div className="container-tasks">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;
