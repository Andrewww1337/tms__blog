import "./sortingBar.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setBtn } from "../../redux/reducers/btn";

export const SortingBar = () => {
  const dispatch = useAppDispatch();
  const btn = useAppSelector((state) => state.btn.value);
  console.log(btn);
  const [pressButton, setPresButton] = useState(btn);
  const toggleBtn = () => {
    let newBtn = String(pressButton);
    dispatch(setBtn({ newBtn }));
  };
  return (
    <div className="sortingBar">
      <Button
        text="All"
        onClick={() => setPresButton("All")}
        className={`secondary2 forPostList ${
          pressButton === "All" ? "active" : ""
        }`}
        disabled={false}
        image=""
      />
      <Button
        text="My favorites"
        onClick={() => setPresButton("My favorites")}
        className={`secondary2 forPostList ${
          pressButton === "My favorites" ? "active" : ""
        }`}
        disabled={false}
        image=""
      />
      <Button
        text="Popular"
        onClick={() => setPresButton("Popular")}
        className={`secondary2 forPostList ${
          pressButton === "Popular" ? "active" : ""
        }`}
        disabled={false}
        image=""
      />
      <button onClick={toggleBtn}>BBB</button>
    </div>
  );
};
