import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <a
            href="https://github.com/tiffyzsmile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <Image
              alt="GitHub"
              src="/images/logos/github__logo-icon.svg"
              width={30}
              height={30}
            />
          </a>
          <a
            href="http://www.linkedin.com/in/tiffanymay"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <Image
              alt="Linked In"
              src="/images/logos/linked-in__logo-icon.svg"
              width={30}
              height={30}
            />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Tiffany Lea May
        </p>
      </div>
    </footer>
  );
};

export default Footer;
