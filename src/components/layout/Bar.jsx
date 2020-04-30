import React, { useContext } from 'react';
import UserContext from '../../context/users/userContext';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

function Bar() {
  const { user, setLogOut } = useContext(UserContext);
  const { setResetProjectState } = useContext(ProjectContext);
  const { setResetTaskState } = useContext(TaskContext);

  const handleClick = () => {
    setLogOut();
    setResetProjectState();
    setResetTaskState();
  };

  return (
    <header className="app-header">
      {user && (
        <p className="name-user">
          Welcome <span>{user.name}</span>{' '}
        </p>
      )}

      <nav className="nav-principal">
        <button onClick={handleClick} className="btn btn-blank close-session">
          Log Out
        </button>
      </nav>
    </header>
  );
}

export default Bar;
