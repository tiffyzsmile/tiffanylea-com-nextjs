import styles from "./page.module.css";
import * as query from "../graphql/queries";
import { generateClient } from "aws-amplify/api";

// TODO: figure out why this is
// not sure why I have to duplicate this code here to work
// having it in main layout.tsx should be enough :/
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig, { ssr: true });
const client = generateClient();

const HomePage = async () => {
  const { data, errors } = await client.graphql({
    query: query.listProjects,
  });

  return (
    <main className={styles.main}>
      <ul>
        {data.listProjects.items.map((project) => {
          return (
            <li key={project.id}>
              <div>Name: {project.name}</div>
              <span>Description: {project.description}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default HomePage;
