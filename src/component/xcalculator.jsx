import React, { useState } from "react";
import { evaluate } from "mathjs"; // For mathematical expression evaluation
import "./cal.css"; // Add basic CSS for styling (optional)

const Calculator = () => {
  const [input, setInput] = useState(""); // Tracks user input and result

  // Append a value to the input
  const appendValue = (value) => {
    if (["Error", "NaN", "Infinity"].includes(input)) {
      setInput(""); // Clear if an error is displayed
    }
    setInput((prev) => prev + value);
  };

  // Clear the input field
  const clearInput = () => {
    setInput("");
  };

  // Calculate the result based on the input
  const calculate = () => {
    try {
      if (!input) {
        setInput("Error"); // Handle empty input
        return;
      }

      if (input.includes("/0")) {
        // Handle division by zero cases
        if (input === "0/0") {
          setInput("NaN"); // 0 divided by 0
        } else {
          setInput("Infinity"); // Any number divided by 0
        }
        return;
      }

      // Evaluate the expression using `mathjs`
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
                clearInput(); // Clear input
              } else if (btn === "=") {
                calculate(); // Calculate result
              } else {
                appendValue(btn); // Append button value
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
