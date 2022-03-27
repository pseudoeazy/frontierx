import React from "react";
import Link from "next/link";

import Faq from "./Faq";
import OpenWindow from "./../icons/OpenWindow";
import Discord from "./../icons/Discord";
import Instagram from "./../icons/Instagram";
import Twitter from "../icons/Twitter";

import { CTA } from "../types/CTA";

const leftLinks: CTA[] = [
  {
    label: "Lorem ipsum.com",
    icon: OpenWindow,
    path: "/#",
  },
  {
    label: "@Lorem ipsum",
    icon: Instagram,
    path: "/#",
  },
];
const rightLinks: CTA[] = [
  {
    label: "@Lorem ipsum",
    path: "/#",
    icon: Discord,
  },
  {
    label: "@Lorem ipsum",
    path: "/#",
    icon: Twitter,
  },
];

const Socials: React.FC = () => {
  return (
    <div className="w-full sm:w-1/2">
      <Faq index={0}>
        <p className="w-4/5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
        <div className="flex pt-10">
          <div className="flex flex-col space-y-5 ">
            {leftLinks.map(({ label, path, icon: Icon }, idx) => (
              <Link key={idx} href={path}>
                <a className="flex text-red-400 text-sm transition duration-200 hover:text-white ">
                  {<Icon />} <span className="block ml-1">{label}</span>
                </a>
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-5 ml-8">
            {rightLinks.map(({ label, path, icon: Icon }, idx) => (
              <Link key={idx} href={path}>
                <a
                  className={`flex text-sm transition duration-200 hover:text-white  ${
                    idx + 1 === rightLinks.length
                      ? "text-gray-50"
                      : "text-red-400 "
                  }`}
                >
                  {<Icon />} <span className="block ml-1">{label}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Faq>
    </div>
  );
};

export default Socials;
