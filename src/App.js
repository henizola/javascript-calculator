import React, { useState } from "react";
import {
  Calculator,
  Numbers,
  Display,
  Ac,
  Zero,
  NumbersContainer,
  Equals,
  Opp,
  CalculatorContainer,
  Multi,
  Total,
} from "./App.styles";

function App() {
  const [evaluated, setEvaluated] = useState(0);
  const [total, setTotal] = useState("0");

  const handleClick = (event) => {
    const last = total[total.length - 1];
    console.log(last.charCodeAt());
    event.target.innerHTML.charCodeAt() === 46 &&
    total[total.length - 1].charCodeAt() !== 46
      ? setTotal(total.concat(event.target.innerHTML))
      : total.length > 15
      ? setTotal("maximum limit reached")
      : total.length > 1
      ? total[total.length - 1] === event.target.innerHTML &&
        !(event.target.innerHTML < 10)
        ? console.warn("same")
        : setTotal(total.concat(event.target.innerHTML))
      : total === "0" && event.target.innerHTML < 10
      ? setTotal(event.target.innerHTML)
      : (total[0] < 10 && total[0] > 0) ||
        (!(total[0] < 10) && !(total[0] > 0) && total.length === 1)
      ? setTotal(total.concat(event.target.innerHTML))
      : setTotal(event.target.innerHTML);
  };
  const setTotalValue = () => {
    setEvaluated(eval(total));
  };
  const setDefault = () => {
    setTotal("0");
    setEvaluated(0);
  };
  return (
    <CalculatorContainer>
      <Display>
        <Total>
          {evaluated !== 0 ? (
            <div>
              {total} = {evaluated}
            </div>
          ) : (
            ""
          )}
        </Total>
        <h1
          style={{ textAlign: "end", marginTop: "-15px", marginRight: "10px" }}
        >
          {total}
        </h1>
      </Display>
      <Calculator>
        <Ac onClick={setDefault}>AC</Ac>

        <Multi onClick={handleClick}>*</Multi>
        <Opp onClick={handleClick}>/</Opp>
        <NumbersContainer>
          <Numbers onClick={handleClick}>7</Numbers>
          <Numbers onClick={handleClick}>8</Numbers>
          <Numbers onClick={handleClick}>9</Numbers>
          <Numbers onClick={handleClick}>4</Numbers>
          <Numbers onClick={handleClick}>5</Numbers>
          <Numbers onClick={handleClick}>6</Numbers>
          <Numbers onClick={handleClick}>1</Numbers>
          <Numbers onClick={handleClick}>2</Numbers>
          <Numbers onClick={handleClick}>3</Numbers>
          <Zero onClick={handleClick}>0</Zero>
          <Numbers onClick={handleClick}>.</Numbers>
        </NumbersContainer>
        <Opp onClick={handleClick}>+</Opp>
        <Opp onClick={handleClick}>-</Opp>
        <Equals onClick={setTotalValue}>=</Equals>
      </Calculator>
    </CalculatorContainer>
  );
}

export default App;
