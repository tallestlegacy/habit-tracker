import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import colors from './colors';
import {radius} from './styles';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactElement | string | number;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, onPress, outline}) => {
  const buttonStyles: any[] = [styles.button];
  if (outline) {
    buttonStyles.push(styles.outline);
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: radius.small,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowRadius: 10,
  },
  outline: {
    backgroundColor: colors.lightOulineBackground,
  },
});

export default Button;
