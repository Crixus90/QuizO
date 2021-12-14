import React, { useEffect } from "react";
import Category from "../../components/CATEGORIES/Category";
import Navbar from "../../components/Navbar/Navbar";
import { useGame } from "../../Context/GameContext";
import "./HomePage.css";

import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";

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
            logo: <DiJavascript1 className="icon" />,
          },
          {
            title: "React",
            value: "react",
            logo: <FaReact className="icon" />,
          },
          { title: "CSS", value: "css", logo: <DiCss3 className="icon" /> },
          { title: "HTML", value: "html", logo: <DiHtml5 className="icon" /> },
        ].map((e) => (
          <Category key={e.value} {...e} className="category" />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
