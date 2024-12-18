import dynamic from "next/dynamic";
const DynamicTaskList = dynamic(() => import("../components/TaskList/TaskList"), {
  ssr: false,
})
function TodoScreen() {
  return (
    <section className="py-32 px-1 sm:p-32">
      <h1 className="text-3xl font-bold underline">Lista de tareas</h1>
      <h2 className="mb-4">Organiza las tareas de tu día 😀</h2>
      <DynamicTaskList />
    </section>
  );
}

export default TodoScreen;
