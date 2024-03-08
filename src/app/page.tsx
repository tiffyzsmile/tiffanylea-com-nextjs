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
    <section className={styles.homepage}>
      <h1>Hi, my name is Tiffany May, I am a web developer.</h1>
      <img src="/images/cartoonImageHome.gif" alt="Tiffany as a Cartoon" />
      <p>
        I have a passion for what I do and am looking for a challenging
        environment to continue learning and growing from.&nbsp;
      </p>
      <p>
        My dream environment would include some of the following
        characteristics:
      </p>
      <ul>
        <li>
          Values all roles in the concept, design, development and testing
          process
        </li>
        <li>
          Continuously raising the bar and taking pride in all work performed
        </li>
        <li>
          A true dedication and understanding of Web Standards and Best Practice
        </li>
        <li>
          A talented team of individuals that share a common passion for Web
          Technologies
        </li>
      </ul>
      <hr />
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
    </section>
  );
};

export default HomePage;
