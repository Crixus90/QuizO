import React from "react";
import { useGame } from "../../Context/GameContext";
import "./Category.css";

function Category(props) {
  const { decideCategory } = useGame();
  return (
    <div
      className="category"
      onClick={() => {
        if (props.value) {
          decideCategory(props.value);
        }
      }}
    >
      <h2>{props.title}</h2>
    </div>
  );
}

export default Category;
