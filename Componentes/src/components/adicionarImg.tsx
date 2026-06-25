import * as ImagePicker from 'expo-image-picker';
import { Image, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [image, setImage] = useState(null);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <>
      <TouchableOpacity onPress={pickImage}>
        <Text>Escolher Foto</Text>
      </TouchableOpacity>

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 10 }}
        />
      )}
    </>
  );
}