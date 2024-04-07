import styles from "./page.module.css";
import { H1 } from "@/components/Typography";
import Image from "next/image";

const HomePage = async () => {
  return (
    <section className={styles.homepage}>
      <H1>Hi, my name is Tiffany May, I am a web developer.</H1>
      <Image
        src="/images/cartoonImageHello.png"
        alt="Tiffany as a Cartoon"
        width={359}
        height={359}
        loading={"eager"}
        priority
      />
      <p>
        I have a passion for what I do and am looking for a challenging
        environment to continue learning and growing.&nbsp;
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
    </section>
  );
};

export default HomePage;
