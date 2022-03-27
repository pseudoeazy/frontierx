import type { NextPage } from "next";

import Layout from "../components/Layout";
import FeaturedBanner from "./../components/FeaturedBanner";
import FeaturesCTA from "../components/FeaturesCTA";
import Faqs from "../components/faqs/Faqs";

const Home: NextPage = () => {
  return (
    <Layout title="Frontierx | Frontend Dev Test">
      <FeaturedBanner />
      <FeaturesCTA />
      <Faqs />
    </Layout>
  );
};

export default Home;
