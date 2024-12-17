import TaskList from "../components/TaskList";

function TodoScreen() {
  return (
    <section className="p-32">
      <h1 className="text-3xl font-bold mb-4">Lista de tareas</h1>
      <TaskList />
    </section>
  );
}

export default TodoScreen;
