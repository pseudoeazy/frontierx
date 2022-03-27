import React from "react";
import Head from "next/head";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Logo from "./../Logo";

const styles = {
  link: `p-1 font-primary font-semibold 
        text-white text-base 
        transition ease-linear duration-500 
        hover:border-b-2 hover:border-b-white
        focus:ring focus:ring-gray-300`,
};

type Menu = { name: string; path: string };

const menus: Menu[] = [
  { name: "Lorem", path: "/#" },
  { name: "Lorem", path: "/#" },
  { name: "Lorem", path: "/#" },
];

const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className="bg-gray-900">
    <Head>
      <meta charSet="utf-8" />
      <title> {title} </title>
    </Head>
    <div className="flex justify-center bg-header-900">
      <nav className="w-full h-24 flex justify-between items-center px-10">
        <Logo />
        <SearchBar />
        <ul className="flex space-x-9">
          {menus.map(({ path, name }, idx) => (
            <li key={idx}>
              <Link href={path}>
                <a className={styles.link}>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="w-full h-2 bg-gradient-to-r from-topbar-100 to-topbar-200"></div>
  </header>
);

export default Header;
