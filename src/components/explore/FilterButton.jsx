import { Check, ChevronDown } from "lucide-react";
import React, { useRef, useEffect } from "react";

function FilterButton({ options, onSelect }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(options[0]);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative w-fit">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 rounded-full w-fit bg-[#eef0f3] hover:bg-[#e5e7ea] px-4 py-2"
      >
        {isSelected.icon}
        <p>{isSelected.label}</p>
        <ChevronDown size={18} className={`${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute w-fit mt-2 rounded-3xl overflow-hidden shadow bg-white z-10">
          <ul>
            {options.map((option) => (
              <li
                key={option.label}
                className="flex gap-4 items-center justify-between hover:bg-[#eef0f3] px-6 py-4 cursor-pointer"
                onClick={() => {
                  setIsSelected(option);
                  setIsOpen(false);
                  onSelect && onSelect(option);
                }}
              >
                {option.icon && option.icon}
                <p className="flex-1 shrink-0 text-nowrap">{option.label}</p>
                {isSelected === option ? (
                  <Check size={18} color="#0052ff" />
                ) : (
                  <div />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FilterButton;
