import React, { useEffect } from "react";
import Category from "../../components/CATEGORIES/Category";
import Navbar from "../../components/Navbar/Navbar";
import { useGame } from "../../Context/GameContext";
import "./HomePage.css";

function HomePage() {
  const { resetGame } = useGame();

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  return (
    <div className="home">
      <Navbar />
      <div className="cat-container">
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
  );
}

export default HomePage;
