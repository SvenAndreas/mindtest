import { randomId } from ".";
import { ITask, TaskStatus } from "../types/TaskType";

export const handleAddTask = (
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>,
  setIsAddingTask: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  setIsAddingTask(true);
  setTasks((prevTasks) => {
    let id = randomId();
    while (prevTasks.some((task) => task.id === id)) {
      id = randomId();
    }
    const newTasks = [
      ...prevTasks,
      { description: "", status: TaskStatus.PENDING, id },
    ];
    return newTasks;
  });
};
