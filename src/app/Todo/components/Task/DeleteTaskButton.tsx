import React from "react";
import { MdDelete } from "react-icons/md";

function DeleteTaskButton({
  onDeleteTask,
}: {
  onDeleteTask: () => void;
}) {
  return (
    <button
      onClick={onDeleteTask}
      className="p-1 invisible shadow-md duration-100 opacity-0 cursor-pointer group-hover:visible group-hover:opacity-70 bg-primary-l rounded-full absolute -left-[34px] top-[6px]  "
    >
      <MdDelete className="text-2xl text-primary" />
    </button>
  );
}

export default DeleteTaskButton;
