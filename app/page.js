"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { use } from "react";
import About from "./components/About";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    </>
  );
}
