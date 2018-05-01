import React from 'react';
import { View, Text } from 'react-native';

import { store, persistor } from './config/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootContainer from './routes/route';

//Provide the app with the store, allowing all screens to connect() to get access.
//Use a PersistGate to allow a loading screen to show until store has been loaded from disk.
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View>
              <Text>loading...</Text>
            </View>
          }
          persistor={persistor}
        >
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
