import React, { Suspense } from "react";
import Portfolio from "@/components/Portfolio";

const PortfolioPage = async () => {
  return (
    <div>
      <Suspense>
        <Portfolio />
      </Suspense>
    </div>
  );
};

export default PortfolioPage;
