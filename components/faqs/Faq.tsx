import React, { useReducer } from "react";
import FaqHeader from "./FaqHeader";
import FaqBody from "./FaqBody";

const toggleReducer = (state: boolean) => !state;

const Faq: React.FC<{ index: number }> = ({ children, index }) => {
  const [isOpen, setIsOpen] = useReducer(toggleReducer, index === 0);

  return (
    <section className="w-full">
      <FaqHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <FaqBody isOpen={isOpen}>{children}</FaqBody>
    </section>
  );
};

export default Faq;
