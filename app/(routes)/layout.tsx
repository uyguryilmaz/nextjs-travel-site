import Footer from "@/components/sections/footer/Footer";
import Header from "@/components/sections/header/Header";
import React from "react";

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout = ({ children }: RouteLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex-1">{children}</div>
      <div className="min-h-60"></div>
      <Footer />
    </div>
  );
};

export default RouteLayout;
