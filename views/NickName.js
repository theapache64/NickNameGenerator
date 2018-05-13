// @flow
import React, { Component } from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import ThemedContainer from './widgets/ThemedContainer';
import NickNameGen from "../utils/NickNameGen";


type Props = {
    navigation : *,
    name : string
}
export default class NickName extends Component<Props> {

  static defaultProps = {
    name: 'Shifar',
  };

  handleTryAnother(){
      this.props.navigation.state.params.clearName();
      this.props.navigation.pop()
  }

  render() {
    return (
      <ThemedContainer hideToolbar={true}>

        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>

            <Text style={{
                color:'white',
                marginBottom:50,
                fontSize:80
            }}>{NickNameGen.getNickName(this.props.navigation.state.params.name)}</Text>

            {/*Try another button*/}
            <TouchableHighlight style={{padding:10, borderRadius:50}}  underlayColor="#666" onPress={this.handleTryAnother.bind(this)}>
                <Text style={{color: 'white'}}>TRY ANOTHER</Text>
            </TouchableHighlight>

        </View>

      </ThemedContainer>
    );
  }
}
