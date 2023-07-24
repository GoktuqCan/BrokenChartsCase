import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import Navigation from 'navigation/Navigation';
import store from 'state/store';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <Navigation />
      </ReduxProvider>
    </SafeAreaProvider>
  );
}

export default App;
