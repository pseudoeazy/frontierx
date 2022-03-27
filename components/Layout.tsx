import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Layout: React.FC<{ title: string }> = ({ children, title }) => (
  <div className="main-page-layout font-primary">
    <Header title={title} />
    <main className="bg-gradient-to-b from-gray-800 to-secondary-400 ">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
