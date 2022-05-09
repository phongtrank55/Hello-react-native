import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput} from 'react-native';

class CoreComponent extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Some Text</Text>
        <View>
            <Text>Some more Text</Text>
            <Image 
                source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
                style={{width:200, height:200}}
             />
        </View>
        <TextInput  
            style={{borderWidth:1, height:40, borderColor:'gray'}} 
            placeholder="Type here" 
            defaultValue='Default Value'
        />
      </ScrollView>
    );
  }
}

export default CoreComponent;
