import { LikeBar } from "./likeBar";
import "./postCard.css";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type PostCardProps = {
  size: string;
  cardName: string;
  text: string;
  img: string;
  time: string;
  className?: string;
};
let cardSize = "";
let imgSize = "";
let contentSize = "";
let nameCard = "";
let textSize = "";
let articleSize = "";
export const PostCard = ({
  size,
  cardName,
  text,
  img,
  time,
  className,
}: PostCardProps) => {
  if (size === "big") {
    cardSize = "bigCard";
    imgSize = "bigImg";
    contentSize = "bigContent";
    nameCard = "bigName";
    textSize = "bigText";
    articleSize = "bigArt";
  } else if (size === "medium") {
    cardSize = "mediumCard";
    imgSize = "mediumImg";
    contentSize = "mediumContent";
    nameCard = "mediumName";
    textSize = "mediumText";
    articleSize = "mediumArt";
  } else if (size === "small") {
    cardSize = "smallCard";
    imgSize = "smallImg";
    contentSize = "smallContent";
    nameCard = "smallName";
    textSize = "smallText";
    articleSize = "smallArt";
  } else {
    cardSize = "";
    imgSize = "";
    contentSize = "";
    nameCard = "";
    textSize = "";
  }

  return (
    <div className={`${cardSize} ${className} `}>
      <div className={contentSize}>
        <div className={articleSize}>
          <h4 className="time">{time}</h4>
          <h1 className={nameCard}>{cardName}</h1>
          <p className={textSize}>{text}</p>
        </div>
        <img src={img} alt="no" className={imgSize} />
      </div>
      <LikeBar />
    </div>
  );
};
