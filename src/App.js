import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Projects from "./components/projects/Projects";
import ProjectStore from "./store/projects/ProjectStore";
import TaskStore from "./store/tasks/TaskStore";

function App() {
  return (
    <ProjectStore>
      <TaskStore>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TaskStore>
    </ProjectStore>
  );
}

export default App;
