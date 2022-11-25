/* eslint-disable curly */
import { useRef, useState } from 'react';

export enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [numberBefore, setNumberBefore] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setNumberBefore('0');
  };

  const makeNumber = (numberText: string) => {
    // No aceptar doble punto
    if (number.includes('.') && numberText === '.') return;
    // Comprobar el 0 inicial
    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
        // Evaluar si es otro cero y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        // Evitar 0000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }
    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberForBefore = () => {
    if (numberBefore.endsWith('.')) {
      setNumberBefore(number.slice(0, -1));
    } else {
      setNumberBefore(number);
    }
    setNumber('0');
  };

  const btnMathOperation = (operator: Operators) => {
    changeNumberForBefore();
    lastOperation.current = operator;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(numberBefore);
    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setNumberBefore('0');
  };

  return {
    number,
    numberBefore,
    clean,
    makeNumber,
    positiveNegative,
    btnDelete,
    btnMathOperation,
    calculate,
  };
};
