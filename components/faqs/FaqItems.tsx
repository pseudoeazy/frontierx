import React from "react";
import FaqItem from "./FaqItem";
import Item from "../types/Item";

const items: Item[][] = [
  [
    {
      label: "Accessories & Ears",
      title: "Lorem ipsum",
      range: "9%",
    },

    {
      label: "Arms",
      title: "Lorem ipsum",
      range: "15%",
    },

    {
      label: "Background",
      title: "Lorem ipsum",
      range: "2%",
    },
    {
      label: "Eye",
      title: "Lorem ipsum",
      range: "32%",
    },
    {
      label: "Glasses",
      title: "Lorem ipsum",
      range: "3%",
    },
    {
      label: "Hair & Hats",
      title: "Lorem ipsum",
      range: "9%",
    },
    {
      label: "Head",
      title: "Lorem ipsum",
      range: "92%",
    },
    {
      label: "Legs & Clothes",
      title: "Lorem ipsum",
      range: "2%",
    },
    {
      label: "Mouths",
      title: "Lorem ipsum",
      range: "46%",
    },
    {
      label: "Accessories & Ears",
      title: "Lorem ipsum",
      range: "9%",
    },

    {
      label: "Arms",
      title: "Lorem ipsum",
      range: "15%",
    },

    {
      label: "Background",
      title: "Lorem ipsum",
      range: "2%",
    },
  ],
  [
    {
      label: "Accessories & Ears",
      title: "Lorem ipsum",
      range: "9%",
    },

    {
      label: "Arms",
      title: "Lorem ipsum",
      range: "15%",
    },

    {
      label: "Background",
      title: "Lorem ipsum",
      range: "2%",
    },
    {
      label: "Eye",
      title: "Lorem ipsum",
      range: "32%",
    },
    {
      label: "Glasses",
      title: "Lorem ipsum",
      range: "3%",
    },
    {
      label: "Hair & Hats",
      title: "Lorem ipsum",
      range: "9%",
    },
    {
      label: "Head",
      title: "Lorem ipsum",
      range: "92%",
    },
    {
      label: "Legs & Clothes",
      title: "Lorem ipsum",
      range: "2%",
    },
    {
      label: "Mouths",
      title: "Lorem ipsum",
      range: "46%",
    },
    {
      label: "Accessories & Ears",
      title: "Lorem ipsum",
      range: "9%",
    },

    {
      label: "Arms",
      title: "Lorem ipsum",
      range: "15%",
    },

    {
      label: "Background",
      title: "Lorem ipsum",
      range: "2%",
    },
  ],
];

const FaqItems: React.FC = () => (
  <div className=" flex flex-col space-y-5 w-1/2">
    {items.map((item, idx) => (
      <FaqItem key={idx} items={item} index={idx} />
    ))}
  </div>
);

export default FaqItems;
