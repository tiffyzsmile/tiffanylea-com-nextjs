import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConfigureAmplifyClientSide from "../components/ConfigureAmplifyClientSide";
import Header from "../components/Header";
import "@aws-amplify/ui-react/styles.css";
import styles from "./layout.module.scss";
import "./globals.scss";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiffany Lea May",
  description:
    "Website of Tiffany Lea May a Software Engineer focused on frontend development for 15+ years.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigureAmplifyClientSide />
        <div className={styles.page}>
          <Header />
          <section className={styles.content}>{children}</section>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
