import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, List } from 'react-native-paper';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button mode="contained" style={styles.addButton}>
        Add Entry
      </Button>
      <List.Item
        title="Entry 1"
        description="Lorem ipsum dolor sit amet"
        left={(props) => <List.Icon {...props} icon="book" />}
        onPress={() => {}}
      />
      <List.Item
        title="Entry 2"
        description="Consectetur adipiscing elit"
        left={(props) => <List.Icon {...props} icon="book" />}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  addButton: {
    marginBottom: 20,
  },
});



export default HomeScreen;









