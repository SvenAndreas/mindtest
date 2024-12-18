import React from "react";

function TaskListHeaderColumn() {
  return (
    <div className="flex justify-between mb-2 mt-2">
      <p className="ml-1 font-medium">Descripción</p>
      <p className="mr-10 font-medium">Estado</p>
    </div>
  );
}

export default TaskListHeaderColumn;