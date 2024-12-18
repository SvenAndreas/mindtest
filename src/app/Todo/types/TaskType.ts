import { Dispatch, KeyboardEvent, RefObject, SetStateAction } from "react";
export enum TaskStatus {
  COMPLETED = "Finalizada",
  PENDING = "Pendiente",
}
export interface ITask {
  description: string;
  status: TaskStatus;
  id: number;
}

export interface ITaskProps extends ITask {
  inputRef: RefObject<HTMLInputElement>;
  onBlur: () => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onDescriptionChange: (newDescription: string) => void;
  onChangeStatus: (newStatus: TaskStatus) => void;
  onDeleteTask: (index: number) => void;
}
