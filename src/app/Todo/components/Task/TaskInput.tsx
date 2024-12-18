import React, { memo } from "react";

interface ITaskInputProps {
    inputRef: React.RefObject<HTMLInputElement>;
    description: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur: () => void;
}
 function TaskInput({
  inputRef,
  description,
  handleInputChange,
  handleKeyPress,
  onBlur,
}: ITaskInputProps) {
  return (
    <input
      ref={inputRef}
      onChange={handleInputChange}
      value={description}
      onKeyDown={handleKeyPress}
      onBlur={onBlur}
      className="w-full bg-bg focus:outline-none rounded-lg px-2"
    />
  );
}

export default memo(TaskInput);
