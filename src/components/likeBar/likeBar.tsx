import React, { useState, useContext } from "react";
import Like from "../../assets/Icon/Up.svg";
import DisLike from "../../assets/Icon/Down.svg";
import Book from "../../assets/Icon/Bookmark.svg";
import Dots from "../../assets/Icon/dots.svg";
import "./likeBar.css";
import { ThemContext } from "../../App";
export const LikeBar = () => {
  const theme = useContext(ThemContext);
  const [likeValue, setLikeValue] = useState(0);
  const [dislikeValue, setDislikeValue] = useState(0);
  const [bookValue, setBookValue] = useState(false);

  function SetLike(): void {
    setLikeValue(+1);
    setDislikeValue(-1);
  }
  function SetDisLike(): void {
    setDislikeValue(+1);
    setLikeValue(-1);
  }
  function more(): void {
    alert("А ничего нет");
  }
  function menu(): void {
    setBookValue(true);
  }

  return (
    <div className="likeBar">
      <div className="gradeBar">
        <button
          onClick={SetLike}
          className={`gradeButton  gradeButton--${theme}`}
        >
          <img src={Like} alt="no" />
        </button>

        <p className="grade">{likeValue > 0 && likeValue}</p>

        <button
          onClick={SetDisLike}
          className={`gradeButton  gradeButton--${theme}`}
        >
          <img src={DisLike} alt="no" />
        </button>

        <p className="grade">{dislikeValue > 0 && dislikeValue}</p>
      </div>

      <div className="gradeBar">
        <button onClick={menu} className={`gradeButton  gradeButton--${theme}`}>
          <img src={Book} alt="no" />
        </button>

        <button onClick={more} className={`gradeButton  gradeButton--${theme}`}>
          <img src={Dots} alt="no" />
        </button>
      </div>
    </div>
  );
};
