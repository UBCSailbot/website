import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
      <Navbar />
          {children}
      <Footer />
      </html>
    );
  }
