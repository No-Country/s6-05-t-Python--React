import React from "react";
import { DarkMode } from "./components/DarkMode";
import Divider from "./components/Divider/Divider";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import Artist from "./pages/Artist";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<Home/>} path={"/"}/>
        <Route element={<Login/>} path={"/login"}/>
        <Route element={<Register/>} path={"/register"}/>
        <Route element={<Artist/>} path={"/artist/:id"} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
