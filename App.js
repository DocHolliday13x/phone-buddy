import React, { useState } from 'react';
import { StyleSheet, Text, View, useColorScheme, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Navigation from './Navigation';

const windowWidth = Dimensions.get('window').width;

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const colorScheme = useColorScheme();

  const themeContainerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const themeTextStyle = isDarkMode ? styles.darkThemeText : styles.lightThemeText;
  

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.toggleButton} onPress={handleToggleMode}>
        <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
      </TouchableOpacity>
      <View style={[styles.contentContainer, { width: windowWidth }]}>
        <Navigation />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
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
