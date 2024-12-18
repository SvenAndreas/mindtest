import { useLocalStorage } from "@/app/Shared/hooks/useLocalStorage";
import { useEffect } from "react";
import { ITask } from "../types/TaskType";

export const useSyncLocalStorage = (tasks:ITask[]) => {
    const { setItem } = useLocalStorage("tasks");
    useEffect(() => {
        setItem(tasks)
    },[tasks])
}