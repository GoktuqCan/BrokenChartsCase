import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import Navigation from 'navigation/Navigation';
import store, { persistor } from 'state/store';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}

export default App;
