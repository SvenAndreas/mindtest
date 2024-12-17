import React from "react";
import Task from "./Task";
import { IoIosAdd } from "react-icons/io";

function TaskList() {
  return (
    <article className="rounded-2xl px-10 py-4 border-t-[1px] border-secondary-l shadow-xl">
      <ul>
        <Task />
      </ul>
      <div className="px-2">
        <button className="text-xl flex items-center font-extralight">
          <IoIosAdd className="text-xl " />
          Crear tarea
        </button>
      </div>
    </article>
  );
}

export default TaskList;
