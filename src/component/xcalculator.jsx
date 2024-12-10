import React, { useState } from "react";
import { evaluate } from "mathjs"; // Import math.js for evaluating expressions
import "./cal.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  // Append value to the input
  const appendValue = (value) => {
    if (["Error", "NaN", "Infinity"].includes(input)) {
      setInput(""); // Reset if there's an error
    }
    setInput((prev) => prev + value);
  };

  // Clear the input field
  const clearInput = () => {
    setInput("");
  };

  // Calculate the result
  const calculate = () => {
    try {
      if (!input) {
        setInput("Error"); // Handle empty input
        return;
      }

      if (input.includes("/0")) {
        if (input === "0/0") {
          setInput("NaN");
        } else {
          setInput("Infinity");
        }
        return;
      }

      // Use math.js to evaluate the input expression
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error"); // Handle invalid expressions
    }
  };

  return (
    <div className="calculator">
      {/* Input Field */}
      <input type="text" className="display" value={input} readOnly />

      {/* Buttons */}
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "C",
          "0",
          "=",
          "/",
        ].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "C") {
                clearInput();
              } else if (btn === "=") {
                calculate();
              } else {
                appendValue(btn);
              }
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
