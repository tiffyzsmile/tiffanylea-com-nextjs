"use client";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig, { ssr: true });

const ConfigureAmplifyClientSide = () => {
  return null;
};

export default ConfigureAmplifyClientSide;
