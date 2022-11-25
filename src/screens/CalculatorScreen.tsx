/* eslint-disable curly */
import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { CalcButton } from '../components/CalcButton';

import { styles } from '../theme/base.theme';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const CalculatorScreen = () => {
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

  return (
    <View style={styles.calculatorContainer}>
      {numberBefore !== '0' && (
        <Text style={styles.resultSmall}>{numberBefore}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="C" color="#9b9b9b" action={clean} />
        <CalcButton text="+/-" color="#9b9b9b" action={positiveNegative} />
        <CalcButton text="del" color="#9b9b9b" action={btnDelete} />
        <CalcButton
          text="/"
          color="#ff9427"
          action={() => btnMathOperation(Operators.divide)}
        />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="7" action={makeNumber} />
        <CalcButton text="8" action={makeNumber} />
        <CalcButton text="9" action={makeNumber} />
        <CalcButton
          text="X"
          color="#ff9427"
          action={() => btnMathOperation(Operators.multiply)}
        />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="4" action={makeNumber} />
        <CalcButton text="5" action={makeNumber} />
        <CalcButton text="6" action={makeNumber} />
        <CalcButton
          text="-"
          color="#ff9427"
          action={() => btnMathOperation(Operators.substract)}
        />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="1" action={makeNumber} />
        <CalcButton text="2" action={makeNumber} />
        <CalcButton text="3" action={makeNumber} />
        <CalcButton
          text="+"
          color="#ff9427"
          action={() => btnMathOperation(Operators.add)}
        />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="0" wide action={makeNumber} />
        <CalcButton text="." action={makeNumber} />
        <CalcButton text="=" color="#ff9427" action={clean} />
      </View>
    </View>
  );
};
