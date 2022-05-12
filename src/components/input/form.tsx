import React, { useEffect, useRef, useState } from "react";
import "./input.css";

type InputProps = {
  inputType: string;
  placeholder: string;
  disabled: boolean;
  label: string;
  inputRef?: any;
  onChange?: (event: { target: { value: any } }) => void;
};

export const NameForm = ({
  inputType,
  label,
  disabled,
  inputRef,
  onChange,

  placeholder,
}: InputProps) => {
  function ttt() {
    console.log("ttt");
  }
  /*const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.addEventListener("click", ttt);
  });*/

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const handleChange = (event: { target: { value: any } }) => {
    setInputValue(event.target.value);
    if (event.target.value.length < 5 && inputType === "password") {
      setError("error");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event: { preventDefault: () => any }) => {
    alert("Отправленная строка: " + inputValue + error);
    console.log(inputRef.current?.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p className="labelText">{label}</p>
        <input
          ref={inputRef}
          type={inputType}
          placeholder={placeholder}
          className={`${inputType} ${error}`}
          value={inputValue}
          onChange={handleChange}
          disabled={disabled}
        />
        <p className={error && "errorP"}>{error}</p>
      </label>
    </form>
  );
};
