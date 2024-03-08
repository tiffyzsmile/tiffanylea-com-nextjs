import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="setWidth">
        <div>
          <a
            href="https://github.com/tiffyzsmile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <img alt="GitHub" src="/images/logos/github__logo-icon.svg" />
          </a>
          <a
            href="http://www.linkedin.com/in/tiffanymay"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <img alt="Linked In" src="/images/logos/linked-in__logo-icon.svg" />
          </a>
          <a
            href="http://twitter.com/tiffyzsmile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <img alt="Twitter" src="/images/logos/twitter__logo-icon.svg" />
          </a>
          <a
            href="https://www.facebook.com/tiffanymay"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <img alt="Facebook" src="/images/logos/facebook__logo-icon.svg" />
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
