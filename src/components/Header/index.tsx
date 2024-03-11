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
        {isAdmin && (
          <div className={styles.adminNav}>
            <ul className={styles.nav}>
              <li>
                <Link href="/admin/projects">Projects</Link>
              </li>
              <li>
                <Link href="/admin/employers">Employers</Link>
              </li>
              <li>
                <Link href="/admin/clients">Clients</Link>
              </li>
              <li>
                <Link href="/admin/tags">Tags</Link>
              </li>
              <li>
                <Link href="/admin/taggedprojects">Tagged Projects</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
