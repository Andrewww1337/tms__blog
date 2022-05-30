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
import { NavBar } from "../navBar";
import "./login.css";
import { Button } from "../Button";
import { ThemContext } from "../../App";
import { NameForm } from "../input";

export const Login = () => {
  const theme = useContext(ThemContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  function setInfoUser() {
    setLogin(String(emailRef.current?.value));
    console.log(login);
    setPassword(String(passwordRef.current?.value));
    console.log(password);
  }
  return (
    <div className={`login login--${theme}`}>
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
            onClick={() => setInfoUser()}
            className="primary"
            disabled={false}
            image=""
          />

          <p className="signInP">Don’t have an account? Sign Up</p>
        </div>
        <div className="horizondalLine"></div>
      </div>
    </div>
  );
};
