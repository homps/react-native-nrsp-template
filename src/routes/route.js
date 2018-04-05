import React from 'react';
import { StackNavigator } from 'react-navigation';

//screen imports
import ConnectedHomeScreen from '../screens/home';
import ModalScreen from '../screens/modal';
import DetailsScreen from '../screens/detail';

const MainStack = StackNavigator(
    {
      Home: {
        screen: ConnectedHomeScreen,
      },
      Details: {
        screen: DetailsScreen,
      },
    },
    {
      initialRouteName: 'Home',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#F8C471',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
);
  
const RootStack = StackNavigator(
    {
      Main: {
        screen: MainStack,
      },
      MyModal: {
        screen: ModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
);
  
const RootContainer = () => {
    return <RootStack/>
}

export default RootContainer;
