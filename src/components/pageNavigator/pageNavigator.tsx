import React, { useState, useContext } from "react";
import "./pageNavigator.css";
import arrowLeft from "../Icon/Icon-Arrow-Down-Left.svg";
import arrowRight from "../Icon/Icon-Arrow-Down-Right.svg";
import { Button } from "../Button";
import { ThemContext } from "../../App";

export const PageNavigator = () => {
  const theme = useContext(ThemContext);
  return (
    <div className="pageNavigator">
      <div className="pageNavigatorLeft">
        <Button
          onClick={() => console.log("Text")}
          className={`secondary2 forPageNavigator forPageNavigator--${theme}`}
          disabled={false}
          image={arrowLeft}
          text="Prev"
        />
      </div>

      <div className="pageNavigatorCentre">
        <Button
          onClick={() => console.log("Text")}
          text="1"
          className="secondary2 forPageNavigator"
          disabled={false}
          image=""
        />
        <Button
          onClick={() => console.log("Text")}
          text="2"
          className="secondary2 forPageNavigator"
          disabled={false}
          image=""
        />
        <Button
          onClick={() => console.log("Text")}
          text="3"
          className="secondary2 forPageNavigator"
          disabled={false}
          image=""
        />
        <Button
          onClick={() => console.log("Text")}
          text="..."
          className="secondary2 forPageNavigator"
          disabled={false}
          image=""
        />
        <Button
          onClick={() => console.log("Text")}
          text="6"
          className="secondary2 forPageNavigator"
          disabled={false}
          image=""
        />
      </div>

      <div className="pageNavigatorRight">
        <Button
          onClick={() => console.log("Text")}
          text="Next"
          className={`secondary2 forPageNavigator forPageNavigator--${theme}`}
          disabled={false}
          image={arrowRight}
        />
      </div>
    </div>
  );
};
