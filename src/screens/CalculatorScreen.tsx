/* eslint-disable curly */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CalcButton } from '../components/CalcButton';

import { styles } from '../theme/base.theme';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [numberBefore, setNumberBefore] = useState('0');

  const clean = () => {
    setNumber('0');
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

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>{numberBefore}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="C" color="#9b9b9b" action={clean} />
        <CalcButton text="+/-" color="#9b9b9b" action={positiveNegative} />
        <CalcButton text="%" color="#9b9b9b" action={clean} />
        <CalcButton text="/" color="#ff9427" action={clean} />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="7" action={makeNumber} />
        <CalcButton text="8" action={makeNumber} />
        <CalcButton text="9" action={makeNumber} />
        <CalcButton text="X" color="#ff9427" action={clean} />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="5" action={makeNumber} />
        <CalcButton text="5" action={makeNumber} />
        <CalcButton text="6" action={makeNumber} />
        <CalcButton text="-" color="#ff9427" action={clean} />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="1" action={makeNumber} />
        <CalcButton text="2" action={makeNumber} />
        <CalcButton text="3" action={makeNumber} />
        <CalcButton text="+" color="#ff9427" action={clean} />
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
