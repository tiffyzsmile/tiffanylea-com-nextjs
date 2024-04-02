"use client";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";
import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import styles from "./layout.module.scss";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
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
              <li>
                <Link href="/admin/export">Export Data</Link>
              </li>
              <li>
                <button onClick={signOut}>Sign out</button>
              </li>
            </ul>
          </div>
          {children}
        </main>
      )}
    </Authenticator>
  );
};

export default RootLayout;
