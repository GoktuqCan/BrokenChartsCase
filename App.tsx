import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'navigation/Navigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
