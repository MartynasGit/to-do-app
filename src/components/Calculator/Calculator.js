import { useState } from "react";


function Calculator() {
  let [calc, setCalc] = useState("");
  let [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];
  const buttonOps = [
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
  ];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      // eslint-disable-next-line.
      setResult(eval(calc + value));
    }
  };
  const calculate = () => {
    setCalc(eval(calc));
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };
  const clearCalc = () => {
    setCalc("");
  };

  return (
    <div className="calculator-grid pb-3">
      <div className="output">
        {result ? <div className="current-sum">{result}</div> : ""}
        <div className="current-operand">{calc || "0"}</div>
      </div>
      <button className="span-two" onClick={clearCalc}>
        AC
      </button>
      <button onClick={deleteLast}>DEL</button>
      {buttonOps.map((keys) => {
        return (
          <button onClick={(e) => updateCalc(e.target.textContent)}>
            {keys}
          </button>
        );
      })}
      <button className="span-two" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default Calculator;
