import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quo
        obcaecati, repellendus quisquam aperiam perferendis sapiente nam
        doloremque? Suscipit illo voluptate dolores distinctio, sequi iste
        repellat laboriosam consectetur. Maiores vitae tempora molestiae.
        Sapiente, veritatis dolor?
      </Text>
      <Text style={styles.text}>
        Laboriosam, doloremque quos harum magnam iusto nihil eveniet, tenetur
        dolorem tempore voluptatem error placeat, ipsa cum perferendis porro
        modi beatae. Culpa porro vel, ipsa, voluptatibus dolores sed nostrum ea
        earum consectetur quae reiciendis ipsam officia.
      </Text>
      <Text style={styles.text}>
        Doloremque ea, soluta repellat maxime deleniti maiores debitis. Non est
        dolorum a, similique aliquid quod reiciendis facere corporis aut
        obcaecati sunt id, distinctio, reprehenderit dolores ex debitis qui
        expedita mollitia sit. Eligendi enim explicabo obcaecati?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  text: {
    marginVertical: 10,
  },
});

export default index;
