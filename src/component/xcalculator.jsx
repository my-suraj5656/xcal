import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./cal.css";

function Calculator() {
  const [value, setValue] = useState("");

  const handleEvaluate = () => {
    try {
      if (value === "") {
        setValue("Error");
        return;
      }
      if (value === "0/0") {
        setValue("NaN");
        return;
      }
      if (value.includes("/0")) {
        setValue("Infinity");
        return;
      }
      const result = evaluate(value);
      setValue(result.toString());
    } catch (error) {
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input
          className="display"
          type="text"
          value={value || "0"}
          data-testid="calculator-display"
          readOnly
        />
        <div>
          <button onClick={() => setValue(value + "7")}>7</button>
          <button onClick={() => setValue(value + "8")}>8</button>
          <button onClick={() => setValue(value + "9")}>9</button>
          <button onClick={() => setValue(value + "+")}>+</button>
        </div>
        <div>
          <button onClick={() => setValue(value + "4")}>4</button>
          <button onClick={() => setValue(value + "5")}>5</button>
          <button onClick={() => setValue(value + "6")}>6</button>
          <button onClick={() => setValue(value + "-")}>-</button>
        </div>
        <div>
          <button onClick={() => setValue(value + "1")}>1</button>
          <button onClick={() => setValue(value + "2")}>2</button>
          <button onClick={() => setValue(value + "3")}>3</button>
          <button onClick={() => setValue(value + "*")}>*</button>
        </div>
        <div>
          <button onClick={() => setValue("")}>C</button>
          <button onClick={() => setValue(value + "0")}>0</button>
          <button onClick={handleEvaluate}>=</button>
          <button onClick={() => setValue(value + "/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
