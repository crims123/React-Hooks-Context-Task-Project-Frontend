import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Projects from "./components/projects/Projects";
import PrivateRoute from "./components/routes/PrivateRoutes";
import UserStore from "./store/users/UserStore";
import ProjectStore from "./store/projects/ProjectStore";
import TaskStore from "./store/tasks/TaskStore";

function App() {
  return (
    <UserStore>
      <ProjectStore>
        <TaskStore>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/projects" component={Projects} />
            </Switch>
          </Router>
        </TaskStore>
      </ProjectStore>
    </UserStore>
  );
}

export default App;
