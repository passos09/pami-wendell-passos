import { Switch } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [ativo, setAtivo] = useState(false);

  return (
    <Switch
      value={ativo}
      onValueChange={setAtivo}
    />
  );
}