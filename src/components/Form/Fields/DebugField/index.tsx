"use client";
import React, { useState } from "react";
import Button from "@/components/Button";

type Props = {
  values: any;
};

const DebugField = ({ values }: Props) => {
  const [showDebug, setShowDebug] = useState(false);

  const buttonText = showDebug ? "Hide Debug" : "Show Debug";

  return (
    <div style={{ padding: "25px 0" }}>
      <Button styleAs="link" onClick={() => setShowDebug(!showDebug)}>
        {buttonText}
      </Button>
      {showDebug && <pre>{JSON.stringify(values, null, 2)}</pre>}
    </div>
  );
};

export default DebugField;
