import React from "react";
// import * as queries from "@/graphql/queries";
// import { generateClient } from "aws-amplify/api";
import Portfolio from "@/components/Portfolio";

// TODO: figure out why this is
// not sure why I have to duplicate this code here to work
// having it in main layout.tsx should be enough :/
// import { Amplify } from "aws-amplify";
// import awsconfig from "../../../aws-exports";
// Amplify.configure(awsconfig, { ssr: true });
// const client = generateClient();

type Props = {
  params: { projectId: string };
};
const PortfolioPage = ({ params }: Props) => {
  // const { data, errors } = await client.graphql({
  //   query: queries.listProjects,
  // });

  return (
    <div>
      <h1>Portfolio Page</h1>
      <Portfolio selectedProjectId={params.projectId} />
    </div>
  );
};

export default PortfolioPage;
