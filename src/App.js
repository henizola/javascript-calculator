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
		} else if (
			equation[equation.length - 1] === '+' ||
			equation[equation.length - 1] === '-'
		) {
			setEquation(innerHTML);
		}
		setUserInput(innerHTML);
		if (equation[equation.length - 1].charCodeAt() < 48) {
			setEquation(equation.replace(/.$/, innerHTML));
		} else {
			setEquation(equation.concat(innerHTML));
		}

		console.log(equation[equation.length - 1].charCodeAt());
	};
	const addNumbers = async event => {
		const { innerHTML } = event.target;

		if (equation[0] === '0') {
			setEquation(innerHTML);
		} else if (userInput.length < 15) {
			setEquation(equation.concat(innerHTML));
		}

		if (userInput.length > 14) {
			const final = userInput;
			setUserInput('DIGIT LIMIT MET');
			await setTimeout(() => setUserInput(final), 3000);
			// console.log('limit reaches');
		} else if (userInput.charCodeAt() < 47) {
			setUserInput(innerHTML);
		} else {
			setUserInput(userInput.concat(innerHTML));
		}
	};
	const addSummation = async event => {
		const { innerHTML } = event.target;
		if (equation[0] === '0') {
			setEquation(innerHTML);
		} else if (
			equation[equation.length - 1] === '*' ||
			equation[equation.length - 1] === '/'
		) {
			setEquation(equation.concat(innerHTML));
		} else if (equation[equation.length - 1].charCodeAt() < 48) {
			setEquation(equation.replace(/.$/, innerHTML));
		} else {
			setEquation(equation.concat(innerHTML));
		}
		console.log('here');
		setUserInput(innerHTML);
	};
	const addDecimal = event => {
		const { innerHTML } = event.target;
		if (!userInput.includes('.')) {
			setEquation(equation.concat(innerHTML));
			setUserInput(userInput.concat(innerHTML));
		}
	};
	const Calculate = async () => {
		try {
			if (equation[equation.length - 1].charCodeAt() < 48) {
				setEquation(equation.replace(/.$/, ''));
			}
			setTotal(eval(equation));
		} catch (err) {
			console.warn(err);
		}
	};
	return (
		<CalculatorContainer>
			<Display>
				{equation[0] === '0' ? (
					<Total>{total}</Total>
				) : equation.length > 0 && total === 0 ? (
					<Total>{equation}</Total>
				) : total.length > 10 ? (
					<Total>
						{equation} = {total.toExponential()}
					</Total>
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
					<Numbers onClick={addDecimal}>.</Numbers>
				</NumbersContainer>
				<Opp onClick={addSummation}>+</Opp>
				<Opp onClick={addSummation}>-</Opp>
				<Equals onClick={Calculate}>=</Equals>
			</Calculator>
		</CalculatorContainer>
	);
}

export default App;
