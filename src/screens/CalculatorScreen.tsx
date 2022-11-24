import React from 'react';
import { Text, View } from 'react-native';
import { CalcButton } from '../components/CalcButton';

import { styles } from '../theme/base.theme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="C" color="#9b9b9b" />
        <CalcButton text="+/-" color="#9b9b9b" />
        <CalcButton text="%" color="#9b9b9b" />
        <CalcButton text="/" color="#ff9427" />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="7" />
        <CalcButton text="8" />
        <CalcButton text="9" />
        <CalcButton text="X" color="#ff9427" />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="5" />
        <CalcButton text="5" />
        <CalcButton text="6" />
        <CalcButton text="-" color="#ff9427" />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="1" />
        <CalcButton text="2" />
        <CalcButton text="3" />
        <CalcButton text="+" color="#ff9427" />
      </View>
      <View style={styles.row}>
        {/* Button */}
        <CalcButton text="0" wide />
        <CalcButton text="." />
        <CalcButton text="=" color="#ff9427" />
      </View>
    </View>
  );
};
