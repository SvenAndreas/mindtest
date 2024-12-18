import React, { memo } from "react";
import { FaFilter } from "react-icons/fa";
import { TaskStatus } from "../../types/TaskType";
import FilterLabel from "./FilterLabel";

function FilterButton({setFilter}:{setFilter:(filter:TaskStatus)=>void}) {
  
  return (
    <div className="flex cursor-pointer  group bg-primary-d  rounded-lg p-1 text-text-l hover:bg-primary-l hover:text-primary-d duration-300 items-center w-fit gap-2  relative">
      <FaFilter />
      <p className="font-medium text-lg">Filtrar</p>
      <FilterLabel onClick={()=>setFilter(TaskStatus.PENDING)} label="Pendiente" containerAdditionalClass=" w-[108px] left-[80px] sm:left-9"
      textAditionalClass="relative bg-secondary-l font-semibold text-secondary-d left-[8px] sm:left-[20px]" />
      <FilterLabel onClick={()=>setFilter(TaskStatus.COMPLETED)} label="Finalizada" containerAdditionalClass="left-[235px] sm:left-[228px]"  textAditionalClass="relative bg-acent-l text-acent-d font-semibold -left-[48px]"/>
    </div>
  );
}

export default memo(FilterButton)