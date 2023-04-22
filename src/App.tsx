import React from "react";
import "./App.scss";
import { Header } from "./Header";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <footer></footer>
    </>
  );
}
export default App;
