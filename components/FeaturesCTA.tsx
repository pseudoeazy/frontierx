import React from "react";
import Graph from "./icons/Graph";
import CircleBox from "./icons/CircleBox";
import LabelTag from "./icons/LabelTag";
import { CTA } from "./types/CTA";

const styles = {
  button:`
  flex justify-center items-center 
  w-48 h-12 rounded 
  font-extrabold text-white 
  text-base transition 
  ease-linear duration-500 
  hover:bg-header-900`
}
const label = "Lorem ipsum";

const ctas: CTA[] = [
  {
    label,
    path: "/#",
    icon: Graph,
  },
  {
    label,
    path: "/#",
    icon: CircleBox,
  },
  {
    label,
    path: "/#",
    icon: LabelTag,
  },
];

const FeaturesCTA: React.FC = () => (
  <div className="py-3 font-primary text-center">
    <section className="w-full ">
      <h2 className="text-5xl text-white">Lorem ipsum</h2>
      <p className="text-gray-300 mt-1">
        Created by: <span className="text-red-400">Lorem ipsum</span>
      </p>
      <p className="text-gray-300">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
      </p>
    </section>
    <section className="w-full flex justify-center items-center mt-14">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-5">
        {ctas.map(({ label, icon: Icon }, idx) => (
          <button
            type="button"
            key={idx}
            className={`${styles.button} ${
              idx === 1 ? "bg-header-900" : "bg-header-800"
            }`}
          >
            {<Icon />}
            <span className="block ml-1.5 hover:underline hover:decoration-white">{label}</span>
          </button>
        ))}
      </div>
    </section>
  </div>
);

export default FeaturesCTA;
