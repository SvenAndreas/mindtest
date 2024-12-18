import { RefObject, useEffect } from "react";

export const useFocusNewInput = (
  ref: RefObject<HTMLInputElement>,
  isAddingTask: boolean
) => {
  useEffect(() => {
    if (isAddingTask && ref.current) {
      ref.current.focus();
    }
  }, [isAddingTask]);
};
