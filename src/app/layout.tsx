import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConfigureAmplifyClientSide from "../components/ConfigureAmplifyClientSide";
import "@aws-amplify/ui-react/styles.css";
import "./globals.css";

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
        <div className="page">
          <section className="setWidth">{children}</section>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
