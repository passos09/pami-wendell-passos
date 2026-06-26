import { Image } from 'react-native';

export default function MinhaImagem() {
  return (
    <Image
      source={require('../../assets/images/ferrari.jpg')}
      style={{
        width: 500,
        height: 180,
        borderRadius: 20,
        marginBottom: 25,
      }}
    />
  );
}