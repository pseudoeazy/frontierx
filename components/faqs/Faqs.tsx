import React from "react";
import Socials from "./Socials";
import FaqItems from "./FaqItems";

const Faqs: React.FC = () => (
  <div
    className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch space-y-5 sm:space-y-0 sm:space-x-5 pt-20 pb-14 px-4 md:px-28"
    style={{ minHeight: 784 }}
  >
    <Socials />
    <FaqItems />
  </div>
);

export default Faqs;
