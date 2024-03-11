import React from "react";
import { H1, H2, H3 } from "@/components/Typography";
import styles from "./Resume.module.scss";
import EmploymentSection from "@/components/Resume/Employment";
import Image from "next/image";

const Resume = () => {
  return (
    <section className={styles.resume}>
      <section className={styles.intro}>
        <a
          target="_blank"
          className={styles.adobe}
          href="/pdfs/TiffanyLeaMay_resume_2023_04.pdf"
        >
          <Image
            src="/images/icons/adobe.png"
            alt="Adobe PDF"
            width={40}
            height={41}
          />{" "}
          Adobe PDF
        </a>
        <H1>Tiffany Lea May</H1>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/tiffanymay">
              linkedin.com/in/tiffanymay
            </a>
          </li>
          <li>Los Angeles, CA</li>
          <li>336-471-6968 </li>
          <li>
            <a href="mailto:tiffyzsmile@gmail.com">tiffyzsmile@gmail.com</a>
          </li>
        </ul>
      </section>
      <section className="summary">
        <H2>Summary</H2>
        <p>
          Engineering leader with 15+ years of experience. Ready to leverage
          decision-making abilities for all things engineering and be heavily
          involved in all aspects of product development.
        </p>
      </section>
      <section className="skills">
        <H2>Skills Profile</H2>
        <ul>
          <li>
            Modular mindset and a passion for automation in streamlining
            multi-platform applications across mobile devices and web
            efficiently
          </li>
          <li>
            Extensive background in data structure architecture, user
            experience, full project life cycle, responsive design,
            accessibility, performance
          </li>
          <li>
            Ability to plan, design and build elegantly simple solutions
            regardless of problem complexity, tech stack or industry
          </li>
        </ul>
      </section>
      <EmploymentSection />
      <section className="education">
        <H2>Education</H2>
        <H3>
          AAS Web Technologies, Guilford Technical Community College, NC (2008)
        </H3>
        <ul>
          <li>
            Academic Achievement Award for highest GPA in Web Technologies
            Department (2007, 2008)
          </li>
        </ul>
        <H3>
          An Event Apart, The web design conference for UX & front-end experts
          (2012, 2015, 2017, 2019)
        </H3>
        <H3>Adobe MAX, The Creativity Conference (2019)</H3>
      </section>
    </section>
  );
};

export default Resume;
