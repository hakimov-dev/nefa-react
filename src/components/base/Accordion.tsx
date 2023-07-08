import React, { useState } from "react";

const Accordion = (props: any) => {
  const [selected, setSelected] = useState(false);

  function openAccordion() {
    setSelected(!selected);
  }
  return (
    <li className="relative border-b-2 border-gray-200">
      <button
        type="button"
        className="w-full py-4 text-left"
        onClick={openAccordion}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium">{props.accordion.title}</span>
          {selected ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </button>

      {selected && (
        <div className="relative overflow-hidden transition-all duration-700">
          <div className="py-2">
            <p className="text-sm text-gray-700 tracking-wide leading-relaxed">
              {props.accordion.description}
            </p>
          </div>
        </div>
      )}
    </li>
  );
};

export default Accordion;
