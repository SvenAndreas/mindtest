'use client';
import { useState } from "react";

function Task() {
    const [isDone, setIsDone] = useState(false);
    const [isStatusOpen,setIsStatusOpen] = useState(false);
    const handleChangeStatus = () => {
        setIsStatusOpen(!isStatusOpen);
        setIsDone(!isDone);
    }
  return (
    <div className="bg-bg-primary rounded-lg flex justify-between">
      <div className="p-2 w-full">
        <input className="w-full focus:outline-none"></input>
      </div>
      <div className="flex items-center relative">
        <div className="w-[2px] mr-4 h-full bg-bg" />
        <button onClick={() => setIsStatusOpen(!isStatusOpen)} className="bg-secondary-l px-4 mr-3 text-secondary-d py-1 rounded-lg">Pendiente</button>
        {isStatusOpen && (
          <div className="bg-bg-primary top-0 absolute px-4 flex flex-col gap-2 text-secondary-d py-2 shadow-md rounded-lg">
            {/* <p className="font-semibold">Estado</p> */}
            <button onClick={handleChangeStatus} className="bg-secondary-l px-4 text-secondary-d py-1 rounded-lg">Pendiente</button>
            <button onClick={handleChangeStatus} className="bg-acent-l px-4 text-acent-d py-1 rounded-lg">Listo</button>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Task;
