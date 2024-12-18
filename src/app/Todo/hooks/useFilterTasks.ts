import { Dispatch, useEffect } from "react";
import { ITask, TaskStatus } from "../types/TaskType";

export const useFilterTasks = (filter:TaskStatus | null , tasks:ITask[], setFilteredTasks:Dispatch<React.SetStateAction<ITask[]>>)=>{
    useEffect(() => {
        if (filter) {
          const filtered = tasks.filter((task) => task.status === filter);
          setFilteredTasks(filtered);
        } 
      }, [filter, tasks]);
}