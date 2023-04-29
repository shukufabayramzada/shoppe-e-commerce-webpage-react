import React from "react";
import "./App.scss";
import { Header } from "./app/components/Header/Header";
import { HomePage } from "./app/pages/HomePage/HomePage";
import { Footer } from "./app/components/Footer/Footer";
import { AccountPage } from "./app/pages/AccountPage/Account";
import { BlogPage } from "./app/pages/BlogPage/BlogPage";
import { ProductPage } from "./app/pages/ProductPage/ProductPage";
import { SigninPage } from "./app/pages/SigninPage/SigninPage";
import { RegisterPage } from "./app/pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="signin" element={<SigninPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
