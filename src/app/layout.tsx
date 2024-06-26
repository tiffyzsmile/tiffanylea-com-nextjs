import type { Metadata } from "next";
import ConfigureAmplifyClientSide from "../components/ConfigureAmplifyClientSide";
import Header from "../components/Header";
import styles from "./layout.module.scss";
import "./globals.scss";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Home - Tiffany Lea May",
  description:
    "Tiffany Lea May is a Software Engineer focused on frontend development for 15+ years.",
  openGraph: {
    siteName: "Tiffany Lea May",
    images: "/tiffany-lea-may.png",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <ConfigureAmplifyClientSide />
        <div className={styles.page}>
          <Header />
          <section className={styles.content}>{children}</section>
          <Footer />
        </div>
      </body>

      <GoogleAnalytics gaId="G-5Q5RPNW881" />
    </html>
  );
};

export default RootLayout;
