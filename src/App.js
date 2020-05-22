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
} from "./App.styles";

function App() {
  const [total, setTotal] = useState(0);
  return (
    <CalculatorContainer>
      <Display>
        <h1 style={{ textAlign: "end", marginTop: "5px", marginRight: "10px" }}>
          {total}
        </h1>
      </Display>
      <Calculator>
        <Ac>AC</Ac>

        <Multi>X</Multi>
        <Opp>/</Opp>
        <NumbersContainer>
          <Numbers>7</Numbers>
          <Numbers>8</Numbers>
          <Numbers>9</Numbers>
          <Numbers>4</Numbers>
          <Numbers>5</Numbers>
          <Numbers>6</Numbers>
          <Numbers>1</Numbers>
          <Numbers>2</Numbers>
          <Numbers>3</Numbers>
          <Zero>0</Zero>
          <Numbers>.</Numbers>
        </NumbersContainer>
        <Opp>+</Opp>
        <Opp>-</Opp>
        <Equals>=</Equals>
      </Calculator>
    </CalculatorContainer>
  );
}

export default App;
