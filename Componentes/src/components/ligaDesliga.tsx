import { Switch, View, Text } from 'react-native';
import { useState } from 'react';

export default function LigaDesliga() {
  const [ativo, setAtivo] = useState(false);

  return (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <Text style={{
        color: 'white',
        marginBottom: 5
      }}>
        liga e desliga
      </Text>

      <Switch
        value={ativo}
        onValueChange={setAtivo}
      />
    </View>
  );
}