// @flow
import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#212121',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
  },
  body: {
    flex: 1,
  },
});


type Types = {
    children : React.Node,
    hideToolbar? : boolean,
    title? : string
}
export default class ThemedContainer extends React.Component<Types> {
    static defaultProps = {
      hideToolbar: false,
      title: '{RN}',
    };
    render() : React.Node {
      return (
        <View style={styles.container}>

          <StatusBar
            backgroundColor="#000"
            barStyle="light-content"
          />

          {/* Conditioned rendering with Header */}
          {!this.props.hideToolbar && (
            <View style={styles.header}>
              <Text style={styles.headerTitle}>{this.props.title}</Text>
            </View>
                )}

          {/* Children */}
          <View style={styles.body}>
            {this.props.children}
          </View>

        </View>
      );
    }
}

