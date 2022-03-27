import React from "react";
import CircleBox from "./../icons/CircleBox";
import ArrowDown from "./../icons/ArrowDown";

const FaqHeader: React.FC<{
  isOpen: boolean;
  setIsOpen: React.DispatchWithoutAction;
}> = ({ isOpen, setIsOpen }) => (
  <header
    className={`flex justify-between items-center p-7 bg-header-800 rounded-t ${
      !isOpen && "rounded-b"
    } `}
  >
    <div className="flex items-center text-white">
      <span>
        <CircleBox />
      </span>
      <span className="ml-0.5 font-semibold text-base font-primary">
        Lorem ipsum
      </span>
    </div>
    <button
      type="button"
      className={`p-1 transition duration-300 ${
        isOpen ? "rotate-0" : "rotate-180"
      }`}
      onClick={() => setIsOpen()}
    >
      <ArrowDown />
    </button>
  </header>
);

export default FaqHeader;
