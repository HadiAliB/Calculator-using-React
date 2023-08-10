import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handleKeyDown = (event) => {
    const key = event.key;
    if (key === "Enter" || key === "=") {
      calculate();
    } else if (key === "Backspace") {
      handleBackspace();
    } else if (
      !isNaN(key) ||
      key === "." ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/"
    ) {
      handleInput(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult("0");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <div className="result-section">
            <div className="rectangle">{result}</div>
          </div>
          <div className="input-section">
            <div className="rectangle">{input || "0"}</div>
          </div>
          <div className="row">
            <button onClick={() => handleInput("7")}>7</button>
            <button onClick={() => handleInput("8")}>8</button>
            <button onClick={() => handleInput("9")}>9</button>
            <button onClick={() => handleInput("+")}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleInput("4")}>4</button>
            <button onClick={() => handleInput("5")}>5</button>
            <button onClick={() => handleInput("6")}>6</button>
            <button onClick={() => handleInput("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleInput("1")}>1</button>
            <button onClick={() => handleInput("2")}>2</button>
            <button onClick={() => handleInput("3")}>3</button>
            <button onClick={() => handleInput("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleInput("0")}>0</button>
            <button onClick={() => handleInput(".")}>.</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => handleInput("/")}>/</button>
          </div>
          <div className="row">
            <button onClick={clear}>Clear</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
