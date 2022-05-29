import {ScrollView, View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import globalStyles from '../lib/styles';
import colors from '../lib/colors';
import Button from '../lib/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import HabitCard from '../lib/HabitCard';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const [cardCount, setCount] = useState([]);
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={[globalStyles.pageWrapper]}>
        <View style={styles.container}>
          {cardCount.map(idx => (
            <HabitCard key={idx} />
          ))}
          <Button
            onPress={() => {
              console.log('Pushing count');
              setCount([...cardCount, cardCount.length]);
              navigation.navigate('AddHabit');
            }}
            outline>
            <Text style={styles.addButtonText}>ADD</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: colors.white,
    padding: 7,
    marginVertical: 5,
  },
  addButtonText: {
    fontWeight: '900',
    color: '#0003',
  },
});

export default HomeScreen;
