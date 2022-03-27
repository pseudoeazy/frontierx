import React from "react";
import Socials from "./Socials";
import FaqItems from "./FaqItems";

const Faqs: React.FC = () => (
  <div
    className="flex justify-center items-stretch space-x-5 pt-20 pb-14 px-28"
    style={{ minHeight: 784 }}
  >
    <Socials />
    <FaqItems />
  </div>
);

export default Faqs;
