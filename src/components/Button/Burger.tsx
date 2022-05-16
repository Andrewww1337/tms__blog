import React, { useState } from "react";
import { Menu } from "../Menu";
import "./Burger.css";
import { Link } from "react-router-dom";
import { LikeBar } from "../postCard/likeBar";

export const Burger = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Home", href: "/posts" },
    { value: "Add Posts", href: "/search" },
  ];
  return (
    <div>
      <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <span></span>
      </div>
      <Menu
        activ={menuActive}
        setActive={setMenuActive}
        header={"Arteam Malkin"}
        items={items}
      />
    </div>
  );
};
export default Burger;
