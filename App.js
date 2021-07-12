import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, persistor} from './app/store/';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
// Choose the Routes you want
import StackRoutes from './app/navigation/StackRoutes';
import BottomRoutes from './app/navigation/BottomRoutes';
import MixedRoutes from './app/navigation/MixedRoutes';

const App = () => {
  return (
    <StoreProvider store={Store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor={'#000'} barStyle="light-content" />
          {/* <StackRoutes /> */}
          <BottomRoutes/>
          {/* <MixedRoutes/> */}
          <FlashMessage position="bottom" duration={5000} />
        </NavigationContainer>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;