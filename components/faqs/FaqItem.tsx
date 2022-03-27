import React from "react";
import Faq from "./Faq";
import Item from "./../types/Item";

const FaqItem: React.FC<{ items: Item[]; index: number }> = ({
  items,
  index,
}) => (
  <div className="w-full">
    <Faq index={index}>
        <div className="grid grid-cols-3 gap-x-2 gap-y-2.5 text-sm">
          {items.map(({ title, label, range }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center w-40 h-24 bg-header-900 rounded"
            >
              <span className="block text-gray-300">{label}</span>
              <span className="block text-white font-medium">{title}</span>
              <span className="block text-gray-300">{range}</span>
            </div>
          ))}
        </div>
      </Faq>
  </div>
);
export default FaqItem;
