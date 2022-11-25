/* eslint-disable curly */
import React from 'react';
import { Text, View } from 'react-native';
import { CalcButton } from '../components/CalcButton';
import { Operators, useCalculator } from '../hooks/useCalculator';

import { styles } from '../theme/base.theme';

export const CalculatorScreen = () => {
  const {
    number,
    numberBefore,
    clean,
    makeNumber,
    positiveNegative,
    btnDelete,
    btnMathOperation,
    calculate,
  } = useCalculator();

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
        <CalcButton text="=" color="#ff9427" action={calculate} />
      </View>
    </View>
  );
};
