import React from "react";

function Task({ text, category, delete}) {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete" onClick>X</button>
    </div>
  );
}

export default Task;
