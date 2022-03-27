import React from "react";
import Image from "next/image";

const FeaturedBanner: React.FC = () => (
  <section className="mx-auto relative w-full h-48 lg:h-96 py-10 flex justify-center">
    <div
      className="w-full  mx-4 rounded bg-no-repeat bg-cover lg:bg-contain "
      style={{ backgroundImage: `url('/images/banner.jpg')` }}
    ></div>
    <div className="hidden lg:block w-36 h-36 absolute z-10 top-1/2 mx-auto ">
      <Image alt="eclipse" src="/images/eclipse.png" width={149} height={149} />
    </div>
  </section>
);

export default FeaturedBanner;
