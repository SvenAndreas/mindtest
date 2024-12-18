
import { ITask, TaskStatus } from "../types/TaskType";
import { createId } from "./createId";


export const handleAddTask = (
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>,
  setIsAddingTask: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  setIsAddingTask(true);
  setTasks((prevTasks) => {
    let id = createId();
    while (prevTasks.some((task) => task.id === id)) {
      id = createId();
    }
    const newTasks = [
      ...prevTasks,
      { description: "", status: TaskStatus.PENDING, id },
    ];
    return newTasks;
  });
};
