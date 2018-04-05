import React from 'react';
import { Button, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { incrementCounter } from '../actions/local';
  
class HomeScreen extends React.Component {

    //React Navigation will call the navigationOptions function with an object containing { navigation, navigationOptions, screenProps }
    // screen props is from the calling screen. Here we're just interested in navigation
    static navigationOptions = ({ navigation}) => {
        const params = navigation.state.params || {};

        return {
            headerLeft: (
                <Button
                onPress={() => navigation.navigate('MyModal')} 
                title="Info"
                color="darkorange"
                />
            ),
            headerRight: <Button onPress={() => params.incrementCount} title="+1" color="darkorange" />
        };
    };

    //navigation options is static so can't get to the props for the HomeScreen, use this to set some shared params
    componentWillMount() {
        this.props.navigation.setParams({ incrementCount: this.incrementCount});
    }

    incrementCount = () => {
        //incrementCounter just prepares the correct redux message format
        let dispatchConfig = incrementCounter();

        this.props.dispatch(dispatchConfig)
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Count: {this.props.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* Navigate to the Details screen with params */
                        this.props.navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );
    }
}

/**
 * Prop type sanity checking
 */
HomeScreen.propTypes = {
    dispatch: PropTypes.func,
    count: PropTypes.number
  };

//give the screen read access to properties from the store
const mapStateToProps = state => {
    return {
        count : state.local.count
    }
}

//connect the screen to the store
const ConnectedHomeScreen = connect(mapStateToProps)(HomeScreen)

export default ConnectedHomeScreen;