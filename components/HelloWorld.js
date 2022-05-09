import React from 'react';
import { Text, View } from 'react-native';

export default function HelloWorld() {
  return (
    <View style={style}>
      <Text style={{fontWeight: "bold"}}>Hello world</Text>
    </View>
  );
}

const style = {
  flex: 1, justifyContent: "center", alignItems: "center" 
}