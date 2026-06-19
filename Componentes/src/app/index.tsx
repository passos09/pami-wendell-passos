import MeuBotaozinho from '../components/MeuBotaozinho';
import { View, StyleSheet, Text } from 'react-native';
import Minhaimg from '../components/Minhaimg';
const App = () => {

  const teste = () => {
    console.log('Gosto de codar');
  };
  
  const testeii = () => {
    console.log('Entenderam?')
  };

  return (
    <View style={styles.container}>
      <MeuBotaozinho etiqueta="Botão UM" corFundo="green" funcao={teste} />
      <MeuBotaozinho etiqueta="Clique pra Pegar Virus" corFundo="red" funcao={teste} />
      <MeuBotaozinho etiqueta="Pedrinho I love you" corFundo="pink" funcao={testeii} />
      <Minhaimg />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;