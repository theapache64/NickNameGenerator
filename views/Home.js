// @flow
import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import ThemedContainer from './widgets/ThemedContainer';

const styles = StyleSheet.create({
  input: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
    height: 50,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
  },
});


type Types = {
    navigation: *
}
type States = {
    name: string
}
export default class Home extends React.Component<Types, States> {
  constructor(props: { navigation: * }) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
  }

  clearName() {
    this.setState({ name: '' });
  }

  handleNameSubmit() {
    this.props.navigation.navigate('NickName', { name: this.state.name, clearName: this.clearName.bind(this) });
  }

  render(): React.Node {
    return (
      <ThemedContainer hideToolbar>
        <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    margin: 25,
                }}
        >

          <TextInput
            style={styles.input}
            placeholderTextColor="#fefefe"
            underlineColorAndroid="transparent"
            placeholder="Enter your name here"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            onSubmitEditing={this.handleNameSubmit}
          />

        </View>
      </ThemedContainer>);
  }
}

