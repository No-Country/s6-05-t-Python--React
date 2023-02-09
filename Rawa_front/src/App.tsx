import React from "react";
import Community from "./components/Community";
import { DarkMode } from "./components/DarkMode";

export default function App() {
  return (
    <div className="h-screen dark:bg-gray-800 ">
      <DarkMode />
      <Community />
      <div className="">
        <p className="text-red-600 dark:text-blue-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit ea
        </p>
      </div>
    </div>
  );
}
