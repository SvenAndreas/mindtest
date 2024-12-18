import React, { Dispatch } from "react";
import { TaskStatus } from "../../types/TaskType";
import { TiDelete } from "react-icons/ti";

export default function SelectedFilterButton({
  filter,
  setFilter,
}: {
  filter: TaskStatus | null;
  setFilter: Dispatch<React.SetStateAction<TaskStatus | null>>;
}) {
  return (
    <button
      onClick={() => setFilter(null)}
      className={` mt-2 mb-2 p-1 shadow-md rounded-md flex items-center gap-1 ${
        filter === TaskStatus.COMPLETED && "bg-acent-l text-acent-d"
      }  ${filter === TaskStatus.PENDING && "bg-secondary-l text-secondary-d"}`}
    >
      <TiDelete className="text-2xl" />
      {filter}
    </button>
  );
}
