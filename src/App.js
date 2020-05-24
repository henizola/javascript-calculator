import React, { useState } from 'react';
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
} from './App.styles';

function App() {
	const [equation, setEquation] = useState('0');
	const [total, setTotal] = useState(0);
	const [userInput, setUserInput] = useState('');

	const setToDefault = () => {
		setEquation('0');
		setTotal(0);
		setUserInput('');
	};
	const addMultiplication = event => {
		const { innerHTML } = event.target;
		if (equation[0] === '0') {
			setEquation(innerHTML);
		} else if (equation[equation.length - 1] === '*') {
			setEquation('/');
		} else if (equation[equation.length - 1] === '/') {
			setEquation('*');
		} else if (
			equation[equation.length - 1] === '+' ||
			equation[equation.length - 1] === '-'
		) {
			setEquation(innerHTML);
		}
		setUserInput(innerHTML);
		setEquation(equation.concat(innerHTML));
	};
	const addNumbers = event => {
		const { innerHTML } = event.target;

		if (equation[0] === '0') {
			setEquation(innerHTML);
		} else {
			setEquation(equation.concat(innerHTML));
		}
		if (userInput.charCodeAt() < 47) {
			setUserInput(innerHTML);
		} else {
			setUserInput(userInput.concat(innerHTML));
		}
	};
	return (
		<CalculatorContainer>
			<Display>
				{equation[0] === '0' ? (
					<Total>{total}</Total>
				) : equation.length > 0 && total === 0 ? (
					<Total>{equation}</Total>
				) : (
					<Total>
						{equation} = {total}
					</Total>
				)}
				<h1
					style={{
						textAlign: 'end',
						marginTop: '-15px',
						marginRight: '10px',
					}}
				>
					{userInput}
				</h1>
			</Display>
			<Calculator>
				<Ac onClick={setToDefault}>AC</Ac>

				<Multi onClick={addMultiplication}>*</Multi>
				<Opp onClick={addMultiplication}>/</Opp>
				<NumbersContainer>
					<Numbers onClick={addNumbers}>7</Numbers>
					<Numbers onClick={addNumbers}>8</Numbers>
					<Numbers onClick={addNumbers}>9</Numbers>
					<Numbers onClick={addNumbers}>4</Numbers>
					<Numbers onClick={addNumbers}>5</Numbers>
					<Numbers onClick={addNumbers}>6</Numbers>
					<Numbers onClick={addNumbers}>1</Numbers>
					<Numbers onClick={addNumbers}>2</Numbers>
					<Numbers onClick={addNumbers}>3</Numbers>
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
