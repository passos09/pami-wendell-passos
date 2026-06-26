import { Image, View } from 'react-native';

export default function MinhaImagem() {
  return (
    <View style={{
      flexDirection: 'row',
      gap: 10,
      marginBottom: 25,
    }}>

      <Image
        source={require('../../assets/images/ferrari.jpg')}
        style={{
          width: 150,
          height: 150,
        }}
      />

      <Image
        source={require('../../assets/images/ferrari2.jpg')}
        style={{
          width: 150,
          height: 150,
        }}
      />

            <Image
        source={require('../../assets/images/ferrari3.jpg')}
        style={{
          width: 150,
          height: 150,
        }}
      />

    </View>
  );
}