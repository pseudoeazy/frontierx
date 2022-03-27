import React from "react";
import Image from "next/image";
import Link from "next/link";

const styles = {
  link: `
        transition ease-linear duration-500 
        hover:border-b-2 hover:border-b-white
        focus:ring focus:ring-gray-300`,
};

const Logo = () => (
  <div className="w-40 h-6 ">
    <Link href="/">
      <a className={styles.link}>
        <Image
          src="/images/logo.png"
          alt="frontierx logo"
          width={153}
          height={23}
        />
      </a>
    </Link>
  </div>
);

export default Logo;
