import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera } from 'expo-camera';
import { Button } from 'react-native-paper';

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  let cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const handleCapturePhoto = async () => {
    if (hasCameraPermission) {
      const photo = await cameraRef.current.takePictureAsync();
      navigation.navigate('Home', { photo });
    }
  };

  return (
    <View style={styles.container}>
      {hasCameraPermission && (
        <Camera style={styles.camera} ref={cameraRef} />
      )}
      <Button
        mode="contained"
        onPress={handleCapturePhoto}
        disabled={!hasCameraPermission}
      >
        Capture Photo
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '80%',
  },
});

export default CameraScreen;
