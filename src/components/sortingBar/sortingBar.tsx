import "./sortingBar.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../Button";

export const SortingBar = () => {
  const [pressButton, setPresButton] = useState("All");

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
    </div>
  );
};
