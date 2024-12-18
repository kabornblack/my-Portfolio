import HomeSocial from "@/components/HomeSocial";
import Portfolio from "@/components/Portfolio";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <HomeSocial />
      <Portfolio />
    </div>
  );
}

export default page;
