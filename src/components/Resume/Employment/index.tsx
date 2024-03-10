import React from "react";
import { H2 } from "@/components/Typography";
import employmentData from "./employmentData";
import EmploymentItem from "./EmploymentItem";

const Employment = () => {
  return (
    <section>
      <H2>Employment History</H2>
      {employmentData.map((item) => {
        return <EmploymentItem key={item.name} {...item} />;
      })}
    </section>
  );
};

export default Employment;
