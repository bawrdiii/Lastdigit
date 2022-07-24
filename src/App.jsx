import "./App.css";
import { useState } from "react";

const App = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const updateFirstnumValue = (e) => {
    if (firstNumber < 0) {
      setFirstNumber("");
    } else {
      setFirstNumber(e.target.value);
    }
  };
  const updateSecondnumValue = (e) => {
    if (secondNumber < 0) {
      setSecondNumber("");
    } else {
      setSecondNumber(e.target.value);
    }
  };

  const lastDigit = () => {
    const power = firstNumber ** secondNumber;

    const powertString = power.toString();

    const lastDigitString = powertString.slice(-1);

    const result = Number(lastDigitString);
    const div = document.getElementById("result");
    const p = document.getElementById("resultP");

    div.classList.add("show");
    if (power === Infinity) {
      p.innerText = `The result is Infinity and it doesn't have last digit!!!!`;
    }
    if (firstNumber === "" || secondNumber === "") {
      p.innerText = `Please fill both inputs`;
      setTimeout(() => {
        div.classList.remove("show");
        p.innerText = "";
      }, 6000);
    } else if (
      firstNumber !== "" &&
      secondNumber !== "" &&
      power !== Infinity
    ) {
      p.innerText = `Result is: ${power}
      last digit is: ${result}`;
    }
  };

  return (
    <>
      <div>
        <div className="container first">
          <div className="dflex-general">
            <label htmlFor="num1">First Number</label>
            <input
              className="input"
              type="number"
              name="number"
              id="num1"
              value={firstNumber}
              onChange={updateFirstnumValue}
            />
          </div>
          <div className="dflex-general">
            <label htmlFor="num2">Second Number</label>
            <input
              className="input"
              type="number"
              name="number"
              id="num2"
              value={secondNumber}
              onChange={updateSecondnumValue}
            />
          </div>

          <div className="dflex">
            <button type="button" className="btn" onClick={lastDigit}>
              Calculate
            </button>
          </div>
        </div>
        <div className="hide result" id="result">
          <p className="p-result" id="resultP"></p>
        </div>
      </div>
    </>
  );
};
export default App;
