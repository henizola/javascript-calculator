import styled from "styled-components";
export const CalculatorContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  height: 570px;
  width: 420px;
  background-color: black;
  margin: auto;
  margin-top: 45px;
`;
export const Calculator = styled.div`
  position: absolute;
  margin-top: 57px;
  margin-left: 10px;
  width: 404px;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 100px);
  grid-gap: 1px;
`;
export const NumbersContainer = styled.div`
  grid-column: span 3;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(auto-fill, 100px);
`;
export const Numbers = styled.button`
  text-align: center;
  height: 100px;
  margin-top: 0px;
  font-weight: 500;
  font-size: 45px;
  border: none;
  color: white;

  font-family: "Nova Square", cursive;
  background-color: #7898a1;
  &:hover {
    color: black;
    border: 1px solid white;
  }
`;
export const Display = styled.div`
  width: 400px;
  background-color: black;
  grid-column: span 4;
  grid-row: span 2;
  height: 50px;
  margin-left: 10px;
  margin-top: 5px;
  color: white;
`;

export const Ac = styled.button`
  grid-column: span 2;
  text-align: center;
  height: 100px;
  margin-top: 0px;
  background-color: #7d1b27;
  border: none;
  font-weight: 500;
  font-size: 45px;
  color: white;
  font-family: "Nova Square", cursive;
  &:hover {
    color: black;
    border: 1px solid white;
  }
`;
export const Zero = styled.button`
  grid-column: span 2;
  text-align: center;
  height: 100px;
  margin-top: 0px;
  font-weight: 500;
  font-size: 45px;
  border: none;
  color: white;
  background-color: #7898a1;

  font-family: "Nova Square", cursive;
  &:hover {
    color: black;
    border: 1px solid white;
  }
`;
export const Equals = styled.button`
  grid-column: 4/5;
  grid-row: 4/6;
  background-color: #06404f;
  border: none;
  font-weight: 500;
  font-size: 45px;
  color: white;

  font-family: "Nova Square", cursive;
  &:hover {
    color: black;
    border: 1px solid white;
  }
`;
export const Opp = styled.button`
  grid-column: 4/5;
  background-color: gray;
  border: none;
  font-weight: 500;
  font-size: 45px;
  color: white;

  font-family: "Nova Square", cursive;
  &:hover {
    color: black;
    border: 1px solid white;
  }
`;
export const Multi = styled.button`
  grid-column: 3/4;
  background-color: gray;
  border: none;
  font-weight: 500;
  font-size: 45px;
  color: white;

  font-family: "Nova Square", cursive;
  &:hover {
    color: black;
    border: 1px solid white;
  }
`;
