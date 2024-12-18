"use client";
import { ChangeEvent, memo, useState, KeyboardEvent } from "react";
import { ITaskProps, TaskStatus } from "../types/TaskType";
import { MdDelete } from "react-icons/md";

function Task({
  status,
  description,
  inputRef,
  onBlur,
  onKeyPress,
  onDescriptionChange,
  onChangeStatus,
  onDeleteTask,
  id,
}: ITaskProps) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onDescriptionChange(e.target.value);
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress(event);
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      target.blur();
    }
  };
  return (
    <div className="bg-bg group rounded-lg relative flex justify-between">
      <div
        onClick={() => onDeleteTask(id)}
        className="p-1 invisible duration-100 opacity-50 cursor-pointer group-hover:visible group-hover:opacity-100 bg-primary-l rounded-full absolute -left-[34px] top-[6px]  "
      >
        <MdDelete className="text-2xl text-primary" />
      </div>
      <div className="p-2 w-full">
        <input
          ref={inputRef}
          onChange={handleInputChange}
          value={description}
          onKeyDown={handleKeyPress}
          onBlur={onBlur}
          className="w-full bg-bg focus:outline-none rounded-lg px-2"
        />
      </div>
      <div className="flex items-center relative">
        <div className="w-[2px] mr-4 h-full bg-secondary-l" />
        <button
          onClick={() => setIsStatusOpen(!isStatusOpen)}
          className={` ${
            status === TaskStatus.COMPLETED
              ? "bg-acent-l text-acent-d"
              : "bg-secondary-l text-secondary-d"
          }  px-4 mr-3 font-semibold py-1 rounded-lg`}
        >
          {status}
        </button>
        {isStatusOpen && (
          <div className="bg-bg-primary top-0 absolute px-4 flex flex-col gap-2 text-secondary-d py-2 shadow-md rounded-lg z-10">
            {/* <p className="font-semibold">Estado</p> */}
            <button
              onClick={() => {
                onChangeStatus(TaskStatus.PENDING);
                setIsStatusOpen(!isStatusOpen);
              }}
              className="bg-secondary-l px-4 text-secondary-d py-1 rounded-lg"
            >
              {TaskStatus.PENDING}
            </button>
            <button
              onClick={() => {
                onChangeStatus(TaskStatus.COMPLETED);
                setIsStatusOpen(!isStatusOpen);
              }}
              className="bg-acent-l px-4 text-acent-d py-1 rounded-lg"
            >
              {TaskStatus.COMPLETED}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Task);
