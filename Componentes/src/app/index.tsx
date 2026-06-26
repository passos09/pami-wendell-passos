import MeuBotaozinho from '../components/MeuBotaozinho';
import TextoTop from '../components/TextoTop';
import MinhaImagem from '../components/Minhaimagem';
import LigaDesliga from '../components/LigaDesliga';
import { View, StyleSheet, Text } from 'react-native';
const App = () => {

  const teste = () => {
    console.log('sem saldo');
  };
  
  const teste2 = () => {
    console.log('infelizmente ficar olhando')
  };
  const teste3 = () => {
    console.log('Não tem modelos parecidos, esse é unico fih')
  };

  return (
    <View style={styles.container}>
      <TextoTop />
      <MinhaImagem />
      <LigaDesliga />
      <MeuBotaozinho etiqueta="comprar" corFundo="white" funcao={teste} />
      <MeuBotaozinho etiqueta="visualizar" corFundo="white" funcao={teste2} />
      <MeuBotaozinho etiqueta="ver modelos semelhantes" corFundo="white" funcao={teste3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    fontWeight: 'bold',
  },
});

export default App;