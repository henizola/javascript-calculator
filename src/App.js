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
    console.log(typeof event.target.innerHTML);
    total === "0"
      ? setTotal(event.target.innerHTML)
      : setTotal(total.concat(event.target.innerHTML));
  };
  const setTotalValue = () => {
    setEvaluated(eval(total));
  };
  const setDefault = () => {
    setTotal("0");
  };
  return (
    <CalculatorContainer>
      <Display>
        <Total>
          {evaluated !== 0 ? (
            <div>
              {total} {evaluated}
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
