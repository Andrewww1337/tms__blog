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
export const ThemContext = React.createContext("light");

const postsFromSer = [
  {
    size: "big",
    cardName:
      "1Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
  {
    size: "medium",
    cardName:
      "2Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
  {
    size: "medium",
    cardName:
      "3Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
  {
    size: "medium",
    cardName:
      "4Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
  {
    size: "medium",
    cardName:
      "5Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },

  {
    size: "small",
    cardName:
      "6Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
  {
    size: "small",
    cardName:
      "7Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
  {
    size: "small",
    cardName:
      "8Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
  {
    size: "small",
    cardName:
      "9Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
  {
    size: "small",
    cardName:
      "10Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
  {
    size: "small",
    cardName:
      "11Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    img: "https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
    time: "29 April,2022",
  },
];
const colour = "dark";

function App() {
  let tima: [] = [];
  const theme = useAppSelector((state) => state.theme.value);
  const btn = useAppSelector((state) => state.btn.value);
  const dispatch = useAppDispatch();
  function yyy() {
    let tima = JSON.parse(localStorage["reduxx"]).theme.value;
    console.log(tima);
    let newTheme = tima;
    console.log(newTheme);
    console.log(localStorage);
    dispatch(setTheme({ newTheme }));
  }
  yyy();
  const toggleTheme = () => {
    let tima = JSON.parse(localStorage["reduxx"]).theme.value;
    console.log(tima);
    let newTheme = tima;
    console.log(newTheme);
    console.log(localStorage);
    dispatch(setTheme({ newTheme }));
    newTheme = theme === "dark" ? "light" : "dark";
    console.log(newTheme);
    console.log(localStorage);
    dispatch(setTheme({ newTheme })); //!!!

    console.log(localStorage);
  };
  const toggleBtn = () => {
    const newBtn = btn === "dark" ? "light" : "dark";
    dispatch(setBtn({ newBtn })); //!!!
  };
  return (
    <ThemContext.Provider value={colour}>
      <div className="App">
        <NameForm
          inputType="password"
          placeholder=""
          label="Password"
          disabled={false}
        />

        <NameForm
          inputType="email"
          placeholder=""
          label="Email"
          disabled={true}
        />

        <NameForm
          inputType="text"
          placeholder=""
          label="Text"
          disabled={false}
        />

        <NameTextarea
          rows={10}
          cols={22}
          id="textarea"
          placeholder="It was a dark and stormy night..."
          label="Text Area"
        />

        <PostCard
          size="big"
          cardName="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          text="Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight."
          img={Space}
          time="April 20,2021"
        />

        <PostCard
          size="medium"
          cardName="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          text=""
          img={SpaceMedium}
          time="April 20,2021"
        />

        <PostCard
          size="small"
          cardName="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          text=""
          img={SpaceSmall}
          time="April 20,2021"
        />

        <PostList PostsFrom={postsFromSer} />
      </div>
      <Login></Login>
      <Burger />
      <div className={`App theme--${theme}`}>
        <button onClick={toggleTheme}>GGG</button>
        <button onClick={toggleBtn}>BBB</button>
        <p>ttt</p>
      </div>
    </ThemContext.Provider>
  );
}

export default App;
