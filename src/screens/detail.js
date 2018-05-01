import React from 'react';
import { Button, View, Text, WebView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUrl } from '../actions/remote';

class DetailsScreen extends React.Component {
  //used by react navigation when navigating to this screen
  navigationOptions({ navigation }) {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'A Nested Details Screen'
    };
  }

  fetchLorum() {
    this.props.lorum = '<p>fetching..</p>';
    let dispatchConfig = fetchUrl('baconipsum.com/api/?type=meat-and-filler');
    this.props.dispatch(dispatchConfig);
  }

  render() {
    /* Read some params from the navigation state passed by the calling screen*/
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    const deviceWidth = Dimensions.get('window').width;

    /* Get other params from the store*/
    let lorumText = this.props.lorum
      ? '<h1>Fetched Lorum</h1>' + this.props.lorum
      : "<p>Click 'fetch lorum' below to retrieve some lorum ipsum text</p>";

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>lorumIpsum:</Text>
        <WebView
          source={{ html: lorumText }}
          style={{ width: deviceWidth, height: 30, flex: 1 }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button title="Fetch Lorum" onPress={() => this.fetchLorum()} />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

/**
 * Prop type sanity checking
 */
DetailsScreen.propTypes = {
  lorum: PropTypes.string,
  dispatch: PropTypes.func
};

//give the screen read access to properties from the store
const mapStateToProps = state => {
  return {
    lorum: state.remote.text
  };
};

export default connect(mapStateToProps)(DetailsScreen);
