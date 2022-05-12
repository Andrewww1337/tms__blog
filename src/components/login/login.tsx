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
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  let emailInfo: string | undefined = emailRef.current?.value;
  let passwordInfo = passwordRef.current?.value;
  let signInInfo: string[] = [];
  function signInDate(a: string, b: string) {
    signInInfo.push(a + b);
    return console.log(`${signInInfo}+2`);
  }

  return (
    <div className={`login login--${theme}`}>
      <NavBar />
      <div className="signPage">
        <p>Back to home</p>
        <h1>Sign In</h1>
        <div className="signIn">
          <div className="form">
            <NameForm
              inputType="email"
              placeholder="Your Email"
              label="Email"
              disabled={false}
              inputRef={emailRef}
            />
          </div>
          <div className="form">
            <NameForm
              inputType="password"
              placeholder="Your Password"
              label="Password"
              disabled={false}
              inputRef={passwordRef}
            />
          </div>
          <p>Forgot Password</p>
          <Button
            text="Sign in"
            onClick={() =>
              console.log(`Email:${emailInfo}, Passpord:${passwordInfo}`)
            }
            className="primary"
            disabled={false}
            image=""
          />
          <p className="signInP">Don’t have an account? Sign Up</p>
        </div>
        <div className="horizondalLine"></div>
        <p>dmvodv</p>
      </div>
    </div>
  );
};
