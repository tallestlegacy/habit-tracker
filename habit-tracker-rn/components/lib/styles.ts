import {StyleSheet} from 'react-native';
import colors from './colors';

export const radius = {
  standard: 10,
  small: 7,
};

export default StyleSheet.create({
  pageWrapper: {
    backgroundColor: colors.lightBackground,
    height: '100%',
  },
  safeArea: {
    height: '100%',
  },
});
