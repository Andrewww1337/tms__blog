import React, { useState } from "react";
import "./navBar.css";
import iconLike from "../Icon/Up.svg";
import iconBook from "../Icon/Bookmark.svg";
import iconDisLike from "../Icon/Down.svg";
import { Button } from "../Button";
import search from "./icon/search.svg";
import menu from "./icon/Hamburger_icon.svg";
export const NavBar = () => {
  return (
    <div className="NavBarFromComponent">
      <div className="NavMenuLeft">
        <Button
          text=""
          onClick={() => console.log("Text")}
          className="primary"
          disabled={false}
          image={menu}
        />
        <div className="verticalLine"></div>
      </div>
      <div className="NavMenuRight">
        <div className="verticalLine"></div>
        <Button
          text=""
          onClick={() => console.log("Text")}
          className="primary"
          disabled={false}
          image={search}
        />
        <div className="verticalLine"></div>
        <Button
          text="AM"
          onClick={() => console.log("Text")}
          className="primary"
          disabled={false}
          image=""
        />

        <Button
          text="Arteam Malkin"
          onClick={() => console.log("Text")}
          className="primary"
          disabled={false}
          image=""
        />
      </div>
    </div>
  );
};
