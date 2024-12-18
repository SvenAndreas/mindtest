"use client";
import { useEffect, useRef, useState, KeyboardEvent, useCallback } from "react";
import Task from "./Task";
import { IoIosAdd } from "react-icons/io";
import { ITask, TaskStatus } from "../types/TaskType";
import FilterButton from "./FilterButton";
import { randomId } from "../utils/RandomId";

function TaskList() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [filter, setFilter] = useState<null | TaskStatus>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    setIsAddingTask(true);
    setTasks((prevTasks) => {
      let id = randomId();
      while (prevTasks.some((task) => task.id === id)) {
        id = randomId();
      }
      return [
        ...prevTasks,
        { description: "", status: TaskStatus.PENDING, id },
      ];
    });
  };

  useEffect(() => {
    if (isAddingTask && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddingTask]);

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

  const handleChangeDescription = useCallback((id: number, newDescription: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  }, []);

  const handleChangeStatus = useCallback((id: number, newStatus: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  }, []);

  const handleSetFilter = useCallback((filter: TaskStatus | null) => {
    setFilter(filter);
  }, []);

  useEffect(() => {
    console.log(tasks);
    if (filter !== null) {
      const filteredTasks = tasks.filter((e) => filter === e.status);
      setFilteredTasks(filteredTasks);
    }
  }, [filter,filteredTasks]);

  return (
    <article className="rounded-2xl bg-bg-primary px-2  sm:px-10 py-4 border-t-[1px] border-secondary-l shadow-xl">
      {tasks.length !== 0 && (
        <>
          <FilterButton setFilter={handleSetFilter} />
          {filter !== null && (
            <div>
              <button
                onClick={() => setFilter(null)}
                className={` mt-2 mb-2 p-1 shadow-md rounded-md flex items-center gap-1 ${
                  filter === TaskStatus.COMPLETED && "bg-acent-l text-acent-d"
                }  ${
                  filter === TaskStatus.PENDING &&
                  "bg-secondary-l text-secondary-d"
                }`}
              >
                <p className="bg-bg-primary text-text-d rounded-full px-2">x</p>
                {filter}
              </button>
            </div>
          )}
          <div className="flex justify-between mb-2 mt-2">
            <p className="ml-1 font-medium">Descripción</p>
            <p className="mr-10 font-medium">Estado</p>
          </div>
        </>
      )}
      <ul className="flex flex-col gap-4">
        {filter !== null && filteredTasks.length !== 0 &&
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
        {filter === null && tasks.length !== 0 &&
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
            onClick={handleAddTask}
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
