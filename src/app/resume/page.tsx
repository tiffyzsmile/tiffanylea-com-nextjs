import React from "react";
import Resume from "@/components/Resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Tiffany Lea May",
};

const ResumePage = () => {
  return <Resume />;
};

export default ResumePage;
