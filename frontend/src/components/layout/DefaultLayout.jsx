// src/layout/DefaultLayout.jsx
import React from "react";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DefaultLayout;
