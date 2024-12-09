import React, { useState } from "react";
import "./cal.css";

function Calculator() {
  const [value, setvalue] = useState("");

  const handleEvaluate = () => {
    try {
      const result = new Function(`return ${value}`)(); // Safely evaluate the expression
      setvalue(result.toString());
    } catch (error) {
      setvalue("Error"); // Display "Error" for invalid inputs
    }
  };

  return (
    <>
      <div className="conatiner">
        <div className="calculator">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="display">
              <input type="text" value={value} readOnly />
            </div>
            <div>
              <input type="button" value="AC" onClick={() => setvalue("")} />
              <input
                type="button"
                value="DE"
                onClick={() => setvalue(value.slice(0, -1))}
              />
              <input
                type="button"
                value="."
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="/"
                onClick={(e) => setvalue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="8"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="9"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="*"
                onClick={(e) => setvalue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="5"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="6"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="+"
                onClick={(e) => setvalue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="3"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="-"
                onClick={(e) => setvalue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                type="button"
                value="0"
                onClick={(e) => setvalue(value + e.target.value)}
              />
              <input
                className="equal"
                type="button"
                value="="
                onClick={handleEvaluate}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Calculator;
