import "@testing-library/jest-dom";
import TaskList from "@/app/Todo/components/TaskList/TaskList";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("TaskList add taks functionality", () => {
  it("Renders add button", () => {
    render(<TaskList />);
    expect(screen.getByText("Crear tarea")).toBeInTheDocument();
  });
  it('Should add a task', async () => {
    const { getByText, getByRole } = render(<TaskList />);

    expect(getByRole("list")).toBeEmptyDOMElement();

    const addTaskButton = getByText("Crear tarea");
    fireEvent.click(addTaskButton);

    await waitFor(() => expect(getByRole("list")).not.toBeEmptyDOMElement());
  });

});
