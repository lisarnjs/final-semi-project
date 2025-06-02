import type { ReactNode, FC } from "react";

import "./globals.css";
import Header from "@/components/Header";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export const metadata = {
  title: "Final Semi Project",
  description: "Final Semi Project",
};

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children, modal }) => {
  return (
    <html>
      <body className="relative">
        <ReactQueryProvider>
          <Header />

          <main className="w-screen pt-14 pb-10">{children}</main>

          {modal}
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
