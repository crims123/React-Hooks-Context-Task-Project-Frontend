import React from "react";

function Project({ project: { name } }) {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {name}
      </button>
    </li>
  );
}

export default Project;
