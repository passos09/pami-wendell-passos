import { Text, TouchableOpacity } from 'react-native';

const MeuBotaozinho = ({ etiqueta, corFundo, funcao }) => {

    const botaoStyle = {
    backgroundColor: corFundo,
    padding: 10,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    


  };

  return (
    <TouchableOpacity onPress={funcao} style={botaoStyle}>
      <Text>{etiqueta}</Text>
    </TouchableOpacity>
  );
};

export default MeuBotaozinho;
