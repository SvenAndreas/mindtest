import { useLocalStorage } from "@/app/Shared/hooks/useLocalStorage";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ITask } from "../types/TaskType";

export const useInitTaskFromLocalStorage = (
  setTasks: Dispatch<SetStateAction<ITask[]>>
) => {
  const { getItem } = useLocalStorage("tasks");

  useEffect(() => {
    const storedTasks = getItem();
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);
};
