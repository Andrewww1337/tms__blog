import React from "react";
import "./Menu.css";

type MenuProps = {
  activ: boolean;
  setActive: (value: boolean) => void;
  header: string;
  items: Array<object>;
};

export const Menu = ({ activ, setActive, header, items }: MenuProps) => {
  return (
    <div
      className={activ ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="menu__content">
        <div className="menu__header">
          <div className="menu__header_name_person"> {header}</div>
        </div>
        <div className="menu__links">
          {items.map((items: any) => (
            <a href={items.href}>{items.value}</a>
          ))}
        </div>
      </div>
    </div>
  );
};
