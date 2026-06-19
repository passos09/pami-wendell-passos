import { Image } from 'react-native';

export default function Minhaimg() {
  return (
    <Image
    source={require('../../assets/android-icon-background.png')}
      style={{
        width: 200,
        height: 200,
      }}
    />
  );
}