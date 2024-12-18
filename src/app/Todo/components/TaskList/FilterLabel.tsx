import { memo } from "react";

function FilterLabel({
  label,
  containerAdditionalClass,
  textAditionalClass,
  onClick,
}: {
  containerAdditionalClass?: string;
  label: string;
  textAditionalClass?: string;
  onClick: () => void;
}) {
  return (
    <div
      className={`absolute  sm:w-fit text-sm left-9 top-1/2 -translate-y-1/2  ${containerAdditionalClass}`}
    >
      <p
        onClick={onClick}
        className={` hidden group-hover:block transition-all text-center sm:-translate-x-3 sm:group-hover:translate-x-0 w-24 sm:mx-12 px-2 rounded-lg py-1 ${textAditionalClass}`}
      >
        {label}
      </p>
    </div>
  );
}

export default memo(FilterLabel);
