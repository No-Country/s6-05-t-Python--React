import React from "react";
import { DarkMode } from "./components/DarkMode";
import Divider from "./components/Divider/Divider";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <>
      <div className="h-screen dark:bg-gray-800">
        <Nav />
        <Header />
        <Divider />
      </div>
    </>
  );
}
