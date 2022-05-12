import { type } from "@testing-library/user-event/dist/type";
import { time } from "console";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { parseIsolatedEntityName } from "typescript";
import { PostCard } from "../postCard";
import { NavBar } from "../navBar";
import "./login.css";
import { Button } from "../Button";
import { PageNavigator } from "../pageNavigator";
import { SortingBar } from "../sortingBar";
import { ThemContext } from "../../App";
import { NameForm } from "../input";

export const Login = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const theme = useContext(ThemContext);
  function ttt() {
    console.log("ttt");
  }
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.addEventListener("click", ttt);
  });

  return (
    <div className={`login login--${theme}`}>
      <NavBar />
      <div className="postListPage">
        <p>Back to home</p>
        <h1>Login</h1>
        <div>
          <NameForm
            inputType="email"
            placeholder="Your Email"
            label="Email"
            disabled={false}
          />
          <NameForm
            inputType="password"
            placeholder="Your Password"
            label="Password"
            disabled={false}
            inputRef={inputRef}
          />
          <p>Forgot Password</p>
          <Button
            text="My favorites"
            onClick={() => console.log(inputRef.current?.value)}
            className="secondary2"
            disabled={false}
            image=""
          />
          <input type="submit" value="Отправить" />
        </div>
      </div>
    </div>
  );
};
