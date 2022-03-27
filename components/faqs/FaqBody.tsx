import React from "react";
import styles from "../../styles/Home.module.css";
const FaqBody: React.FC<{ isOpen: boolean }> = ({ isOpen, children }) => (
  <div
    className={`pb-7 px-3 bg-header-800 transition duration-300 ${
      isOpen ? "opacity-100 rounded-b" : "max-h-0 opacity-0 "
    } `}
  >
    <div
      className={`px-4 overflow-hidden overflow-y-scroll ${styles.scrollbar}`}
    >
      {children}
    </div>
  </div>
);

export default FaqBody;
