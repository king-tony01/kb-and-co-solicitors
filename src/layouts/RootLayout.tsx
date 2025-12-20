import React from "react";
import NavBar from "./NavBar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}

export default RootLayout;
