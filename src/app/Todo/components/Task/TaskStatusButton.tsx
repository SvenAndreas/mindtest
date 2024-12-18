import React from "react";
import { TaskStatus } from "../../types/TaskType";

function TaskStatusButton({
  status,
  handleOpenStatusSelector,
}: {
  status: TaskStatus;
  handleOpenStatusSelector: () => void;
}) {
  return (
    <button
      onClick={handleOpenStatusSelector}
      className={` ${
        status === TaskStatus.COMPLETED
          ? "bg-acent-l text-acent-d"
          : "bg-secondary-l text-secondary-d"
      }  px-4 mr-3 font-semibold py-1 rounded-lg`}
    >
      {status}
    </button>
  );
}

export default TaskStatusButton;
