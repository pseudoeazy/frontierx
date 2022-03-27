import React from "react";
import Image from "next/image";

const FeaturedBanner: React.FC = () => (
  <section className="relative pt-10 flex justify-center">
    <div
      className="w-full h-96 mx-4 rounded bg-no-repeat bg-contain "
      style={{ backgroundImage: `url('/images/banner.jpg')` }}
    ></div>
    <div className="w-36 h-36 absolute z-10 top-1/2 mx-auto ">
      <Image alt="eclipse" src="/images/eclipse.png" width={149} height={149} />
    </div>
  </section>
);

export default FeaturedBanner;
