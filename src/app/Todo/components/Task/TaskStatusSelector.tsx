import React, { memo } from "react";
import { TaskStatus } from "../../types/TaskType";

function TaskStatusSelector({
  handleOpenStatusSelector,
  onChangeStatus,
}: {
  handleOpenStatusSelector: () => void;
  onChangeStatus: (newStatus: TaskStatus) => void;
}) {
  return (
    <div className="bg-bg-primary top-0 absolute px-4 flex flex-col gap-2 text-secondary-d py-2 shadow-md rounded-lg z-10">
      {/* <p className="font-semibold">Estado</p> */}
      <button
        onClick={() => {
          onChangeStatus(TaskStatus.PENDING);
          handleOpenStatusSelector();
        }}
        className="bg-secondary-l px-4 text-secondary-d py-1 rounded-lg"
      >
        {TaskStatus.PENDING}
      </button>
      <button
        onClick={() => {
          onChangeStatus(TaskStatus.COMPLETED);
          handleOpenStatusSelector();
        }}
        className="bg-acent-l px-4 text-acent-d py-1 rounded-lg"
      >
        {TaskStatus.COMPLETED}
      </button>
    </div>
  );
}

export default memo(TaskStatusSelector);
