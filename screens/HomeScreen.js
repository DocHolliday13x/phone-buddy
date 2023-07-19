import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button, List, Modal, TextInput } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';


const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [entryText, setEntryText] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { photo } = route.params || {};

  const handleAddEntry = () => {
    setIsModalVisible(true);
  };

  const handleSaveEntry = () => {
    setIsModalVisible(false);
    Keyboard.dismiss();
    // Saves the journal entry with the photo
    // Use the captured photo along with the entryText
    console.log('Entry:', entryText);
    console.log('Photo:', photo);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (photo) {
      // Do something with the captured photo
      console.log(photo);
    }
  }, [photo]);



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Welcome to Phone Buddy!</Text>
          <Text style={styles.subtitle}>Click the button below to add an entry.</Text>
          <Button mode="contained" onPress={handleAddEntry} style={styles.addButton}>
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
          <Modal visible={isModalVisible} onDismiss={handleCloseModal} contentContainerStyle={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add New Entry</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your journal entry"
              value={entryText}
              onChangeText={setEntryText}
              multiline
            />
            <View style={styles.buttonContainer}>
              <Button onPress={handleSaveEntry} mode="contained" style={styles.saveButton}>
                Save Entry
              </Button>
              <Button onPress={handleCloseModal} mode="outlined" style={styles.cancelButton}>
                Cancel
              </Button>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    marginBottom: 20,
  },
  addButton: {
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  saveButton: {
    marginRight: 10,
  },
  cancelButton: {
    marginLeft: 10,
  },
});



export default HomeScreen;











