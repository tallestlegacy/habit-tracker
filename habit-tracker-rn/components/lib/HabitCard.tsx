import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from './colors';
import {radius} from './styles';

const HabitCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.standard,
    padding: 10,
    backgroundColor: colors.white,
    marginVertical: 5,
  },
});

export default HabitCard;
