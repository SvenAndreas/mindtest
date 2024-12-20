import Modal from "@/app/Shared/components/Modal/Modal";

const DeleteTaskModal = ({
  isOpen,
  handleClose,
  id,
  onDeleteTask,
}: {
  id: number;
  isOpen: boolean;
  handleClose: () => void;
  onDeleteTask: (index: number) => void;
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className="mb-4 w-[250px] sm:w-full">
        <p className="text-lg text-center sm:text-2xl font-bold">
          ¿Deseas eliminar esta tarea?
        </p>
        <p className="text-base font-extralight">
          Esta acción no se puede deshacer
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <button
          className="w-1/2 bg-red-400 text-text-l p-2 rounded mr-2"
          onClick={handleClose}
        >
          Cancelar
        </button>
        <button
          className="w-1/2 bg-primary text-text-l p-2 rounded ml-2"
          onClick={() => onDeleteTask(id)}
        >
          Continuar
        </button>
      </div>
    </Modal>
  );
};

export default DeleteTaskModal;
