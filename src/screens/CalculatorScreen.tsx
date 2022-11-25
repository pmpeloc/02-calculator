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

  const makeNumber = (textNumber: string) => {
    setNumber(number + textNumber);
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
        <CalcButton text="+/-" color="#9b9b9b" action={clean} />
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
