import React from "react";
import Category from "../../components/CATEGORIES/Category";
import Navbar from "../../components/Navbar/Navbar";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-wrapper">
        <h1 className="category-title">Categories</h1>
        <div className="categories">
          {[
            {
              title: "JS",
              value: "js",
            },
            {
              title: "React",
              value: "react",
            },
            { title: "CSS", value: "css" },
            { title: "HTML", value: "html" },
          ].map((e) => (
            <Category key={e.value} {...e} className="category" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
