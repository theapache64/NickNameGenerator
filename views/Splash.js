// @flow

import { NavigationActions, StackActions } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemedContainer from './widgets/ThemedContainer';

type PropsTypes = {
    navigation: *
}

type StatesTypes = {
    isFinished: boolean;
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 50,
      marginBottom:10
  },

  textSub: {
    color: '#666',
    fontSize: 20,
  },
});

export default class Splash extends Component<PropsTypes, StatesTypes> {
  constructor(props: { navigation: * }) {
    super(props);
    this.state = {
      isFinished: false,
    };

    setTimeout(() => {
      this.setState({
        isFinished: true,
      });
    }, 500);
  }

  componentDidUpdate() {
    if (this.state.isFinished) {
      console.log('Moving to home');
      // this.props.navigation.navigate('Home');
      // console.log(this.props.navigation);
      // this._navigateTo("Home")
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      });

      this.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    console.log('Rendering splash');

    return (
      <ThemedContainer hideToolbar>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>{'{RN}'}</Text>
          <Text style={styles.textSub}>{'{NickName Generator}'}</Text>
        </View>

      </ThemedContainer>
    );
  }
}

