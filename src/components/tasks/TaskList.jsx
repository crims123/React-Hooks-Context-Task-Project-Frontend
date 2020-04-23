import React, { Fragment } from "react";
import Task from "./Task";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const tasks = [
  { name: "Choose Platform", task: true },
  { name: "Choose Colors", task: true },
  { name: "Choose Hosting", task: true },
];

function TaskList() {
  return (
    <Fragment>
      <h2>Project: Virtual Store </h2>

      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasks.map((task, index) => (
              <CSSTransition key={index} timeout={200} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        // onClick={onClickEliminar}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
}

export default TaskList;
