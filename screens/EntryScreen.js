import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const EntryScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        placeholder="Enter title"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Content"
        placeholder="Write your diary entry"
        mode="outlined"
        multiline
        style={styles.input}
      />
      <Button mode="contained" style={styles.button}>
        Save Entry
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});



export default EntryScreen;









