import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {View, StyleSheet} from 'react-native';

interface PlaceHolderProps {
  icon: string;
  color?: string;
  backgroundColor?: string;
}

const ScreenPlaceholder: React.FC<PlaceHolderProps> = ({
  icon,
  color,
  backgroundColor,
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Icon name={icon} size={200} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenPlaceholder;
