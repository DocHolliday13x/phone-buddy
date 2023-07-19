import React, { useState } from 'react';
import { StyleSheet, Text, View, useColorScheme, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import Navigation from './Navigation';



const [isDarkMode, setIsDarkMode] = useState(false);

const handleToggleMode = () => {
  setIsDarkMode(!isDarkMode);
};



export default function App() {
  const colorScheme = useColorScheme();

  const themeContainerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const themeTextStyle = isDarkMode ? styles.darkThemeText : styles.lightThemeText;
  

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.toggleButton} onPress={handleToggleMode}>
      <AntDesign name={isDarkMode ? 'bulb1' : 'bulb2'} size={24} color="black" />
    </TouchableOpacity>
      <Text
        style={{ fontSize: 30, marginBottom: 30, ...themeTextStyle }}
      >Phone Buddy!</Text>
      <Navigation />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#dedede',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#dedede',
  },
  toggleButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  
});
