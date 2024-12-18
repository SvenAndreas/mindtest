"use client";
import { ChangeEvent, memo, useState, KeyboardEvent, useCallback } from "react";
import { ITaskProps, TaskStatus } from "../../types/TaskType";
import { MdDelete } from "react-icons/md";
import DeleteTaskButton from "./DeleteTaskButton";
import TaskInput from "./TaskInput";
import Divider from "./Divider";
import TaskStatusButton from "./TaskStatusButton";
import TaskStatusSelector from "./TaskStatusSelector";

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

  const handleOpenStatusSelector = useCallback(() => {
    setIsStatusOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="bg-bg group rounded-lg relative flex justify-between">
      <DeleteTaskButton id={id} onDeleteTask={onDeleteTask} />
      <div className="p-2 w-full">
        <TaskInput
          inputRef={inputRef}
          description={description}
          handleInputChange={handleInputChange}
          handleKeyPress={handleKeyPress}
          onBlur={onBlur}
        />
      </div>
      <div className="flex items-center relative">
        <Divider />
        <TaskStatusButton
          status={status}
          handleOpenStatusSelector={handleOpenStatusSelector}
        />
        {isStatusOpen && (
         <TaskStatusSelector
            handleOpenStatusSelector={handleOpenStatusSelector}
            onChangeStatus={onChangeStatus}
          />
        )}
      </div>
    </div>
  );
}

export default memo(Task);
