import React, { useState } from "react";
import "./style.css";
export default function Calci() {
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
    <section>
      <div className="calc-container">
        <div id="display">{value}</div>
        <div className="buttons">
          <div className="button" onClick={() => handleInput("clear")}>
            c
          </div>
          <div className="button" onClick={() => handleInput("/")}>
            /
          </div>
          <div className="button" onClick={() => handleInput("*")}>
            *
          </div>
          <div className="button" onClick={() => handleInput("del")}>
            &larr;
          </div>
          <div className="button" onClick={() => handleInput("7")}>
            7
          </div>
          <div className="button" onClick={() => handleInput("8")}>
            8
          </div>
          <div className="button" onClick={() => handleInput("9")}>
            9
          </div>
          <div className="button" onClick={() => handleInput("-")}>
            -
          </div>
          <div className="button" onClick={() => handleInput("4")}>
            4
          </div>
          <div className="button" onClick={() => handleInput("5")}>
            5
          </div>
          <div className="button" onClick={() => handleInput("6")}>
            6
          </div>
          <div className="button" onClick={() => handleInput("+")}>
            +
          </div>
          <div className="button" onClick={() => handleInput("1")}>
            1
          </div>
          <div className="button" onClick={() => handleInput("2")}>
            2
          </div>
          <div className="button" onClick={() => handleInput("3")}>
            3
          </div>
          <div className="button" onClick={() => handleInput(".")}>
            .
          </div>
          <div className="button" onClick={() => handleInput("(")}>
            (
          </div>
          <div className="button" onClick={() => handleInput("0")}>
            0
          </div>
          <div className="button" onClick={() => handleInput(")")}>
            )
          </div>
          <div
            id="equal"
            className="button"
            onClick={() => handleInput("eval")}
          >
            =
          </div>
        </div>
      </div>
    </section>
  );
}
