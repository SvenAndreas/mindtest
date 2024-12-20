import "@testing-library/jest-dom";
import TaskList from "@/app/Todo/components/TaskList/TaskList";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useLocalStorage } from "@/app/Shared/hooks/useLocalStorage";
jest.mock("@/app/Shared/hooks/useLocalStorage", () => ({
  useLocalStorage: jest
    .fn()
    .mockReturnValue({
      setItem: jest.fn(),
      getItem: jest.fn(() => null),
      removeItem: jest.fn(),
    }),
}));
describe("TaskList add taks functionality", () => {
  it("Renders add button", () => {
    render(<TaskList />);
    expect(screen.getByText("Crear tarea")).toBeInTheDocument();
  });

  it("Should add a task", async () => {
    const { getByText, getByRole } = render(<TaskList />);

    expect(getByRole("list")).toBeEmptyDOMElement();

    const addTaskButton = getByText("Crear tarea");
    fireEvent.click(addTaskButton);

    await waitFor(() => expect(getByRole("list")).not.toBeEmptyDOMElement());
  });

  it("Should save tasks in localStorage when a task is added", async () => {
    const mockSetItem = jest.fn();
    (useLocalStorage as jest.Mock).mockReturnValue({
      setItem: mockSetItem,
      getItem: jest.fn(() => []),
      removeItem: jest.fn(),
    });

    const { getByText } = render(<TaskList />);
    const addTaskButton = getByText("Crear tarea");

    fireEvent.click(addTaskButton);

    await waitFor(() =>
      expect(mockSetItem).toHaveBeenCalledWith([
        { description: "", id: expect.any(Number), status: "Pendiente" },
      ])
    );
  });
});
