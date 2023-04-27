import React, { useState } from "react";

export default function Index() {
  const [value, setValue] = useState<string>("0");

  const handleInput = (e: string) => {
    switch (e) {
      case "clear":
        setValue("0");
        break;
      case "del":
        setValue(value.slice(0, -1));
        break;
      case "eval":
        setValue(eval(value));
        break;
      default:
        if (value === "0") {
          setValue(e);
        } else {
          setValue(value + e);
        }
    }
  };
  return (
    <div>
      {value}

      <div>
        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("0")}>0</button>
      </div>

      <button onClick={() => handleInput("+")}>+</button>
      <button onClick={() => handleInput("-")}>-</button>
      <button onClick={() => handleInput("*")}>*</button>
      <button onClick={() => handleInput("/")}>/</button>
      <div></div>

      <div>
        <button onClick={() => handleInput("clear")}>clear</button>
        <button onClick={() => handleInput("del")}>del</button>
        <button onClick={() => handleInput("eval")}>Evaluate</button>
      </div>
    </div>
  );
}
