import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddPost } from "./routes/AddPost";
import { Post } from "./routes/Post";
import { Search } from "./routes/Search";
import { Posts } from "./routes/Posts";
import { PostList } from "./components/postList";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Login } from "./components/login";

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
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Routes>
          <Route
            path="/posts"
            element={<PostList PostsFrom={postsFromSer} />}
          />
          <Route path="/posts/add" element={<AddPost />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
