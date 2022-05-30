import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./components/input/input.css";
import { setTheme } from "./redux/reducers/theme";
import { setBtn } from "./redux/reducers/btn";

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import "./App.css";
import { NameForm } from "./components/input";
import { NameTextarea } from "./components/textarea";
import { PostCard } from "./components/postCard";
import Space from "./components/postCard/img/Rectangle 39.png";
import SpaceMedium from "./components/postCard/img/Rectangle 39  med.png";
import SpaceSmall from "./components/postCard/img/Rectangle 39 small.png";
import { PostList } from "./components/postList";
import { Login } from "./components/login";
import Burger from "./components/Button/Burger";
import { NavBar } from "./components/navBar";
export let ThemContext = React.createContext("light");

function App() {
  const theme = useAppSelector((state) => state.theme.value);

  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    let newTheme = theme;
    dispatch(setTheme({ newTheme }));
    newTheme = theme === "dark" ? "light" : "dark";
    dispatch(setTheme({ newTheme }));
  };

  ThemContext = React.createContext(String(theme));
  return (
    <ThemContext.Provider value={theme}>
      <NavBar />
      <button onClick={toggleTheme}>Временная кнопка смены темы</button>
      <div className="App"></div>

      <div className={`App theme--${theme}`}>
        <button onClick={toggleTheme}>GGG</button>

        <p>ttt</p>
      </div>
    </ThemContext.Provider>
  );
}

export default App;
