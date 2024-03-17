import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

type Props = {
  isAdmin?: boolean;
};

const Header = ({ isAdmin }: Props) => {
  return (
    <header className={styles.headerElement}>
      <div className={styles.header}>
        <h1>
          <Link href="/">Tiffany Lea May</Link>
        </h1>
      </div>

      <nav>
        <div className={styles.topNav}>
          <ul className={styles.nav}>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
