"use client";
import { useRef, useState, KeyboardEvent, useCallback } from "react";
import { IoIosAdd } from "react-icons/io";
import { ITask, TaskStatus } from "../../types/TaskType";
import { useLocalStorage } from "@/app/Shared/hooks/useLocalStorage";
import { handleAddTask } from "../../utils";
import {
  useFilterTasks,
  useFocusNewInput,
  useSyncLocalStorage,
} from "../../hooks";
import FilterButton from "./FilterButton";
import SelectedFilterButton from "./SelectedFilterButton";
import Task from "../Task/Task";
import TaskListHeaderColumn from "./TasklistHeaderColumn";



function TaskList() {
  const { getItem } = useLocalStorage("tasks");

  const localTasks = getItem();

  const [tasks, setTasks] = useState<ITask[]>(localTasks ? localTasks : []);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [filter, setFilter] = useState<null | TaskStatus>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useSyncLocalStorage(tasks);
  useFocusNewInput(inputRef, isAddingTask);
  useFilterTasks(filter, tasks, setFilteredTasks);

  const handleDeleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const onBlur = useCallback(() => {
    setIsAddingTask(false);
  }, []);

  const onKeyPress = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsAddingTask(false);
      if (inputRef.current) inputRef.current.blur();
    }
  }, []);

  const handleChangeDescription = useCallback(
    (id: number, newDescription: string) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, description: newDescription } : task
        )
      );
    },
    []
  );

  const handleChangeStatus = useCallback(
    (id: number, newStatus: TaskStatus) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task
        )
      );
    },
    []
  );

  const handleSetFilter = useCallback((filter: TaskStatus | null) => {
    setFilter(filter);
  }, []);

  return (
    <article className="rounded-2xl bg-bg-primary px-9 sm:px-10 py-4 border-t-[1px] border-secondary-l shadow-xl">
      {tasks.length !== 0 && (
        <>
          <FilterButton setFilter={handleSetFilter} />
          {filter && (
            <SelectedFilterButton
              filter={filter}
              setFilter={setFilter}
            />
          )}
          <TaskListHeaderColumn />
        </>
      )}
      <ul className="flex flex-col gap-4">
        {filter &&
          filteredTasks.length !== 0 &&
          filteredTasks.map((e, i) => (
            <Task
              id={e.id}
              onDescriptionChange={(newDescription) =>
                handleChangeDescription(e.id, newDescription)
              }
              onChangeStatus={(status) => handleChangeStatus(e.id, status)}
              inputRef={inputRef}
              onBlur={onBlur}
              onKeyPress={onKeyPress}
              key={e.id}
              description={e.description}
              status={e.status}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        {filter === null &&
          tasks.length !== 0 &&
          tasks.map((e, i) => {
            return (
              <Task
                id={e.id}
                onDescriptionChange={(newDescription) =>
                  handleChangeDescription(e.id, newDescription)
                }
                onChangeStatus={(status) => handleChangeStatus(e.id, status)}
                inputRef={inputRef}
                onBlur={onBlur}
                onKeyPress={onKeyPress}
                key={e.id}
                description={e.description}
                status={e.status}
                onDeleteTask={handleDeleteTask}
              />
            );
          })}
      </ul>
      <div>
        {filter === null && (
          <button
            onClick={() => handleAddTask(setTasks, setIsAddingTask)}
            className="text-xl flex items-center mt-2 text-secondary font-extralight hover:text-secondary-d duration-100"
          >
            <IoIosAdd />
            Crear tarea
          </button>
        )}
      </div>
    </article>
  );
}

export default TaskList;
