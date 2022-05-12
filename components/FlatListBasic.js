import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class FlatListBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> FlatListBasic </Text>
        <FlatList data={[
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Dfdevin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'}, 
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Dfdevin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'}, 
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Dfdevin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'}, 
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}> {item.key}</Text> }>
        
        
        </FlatList>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1, paddingTop:22
  }, 
  item: {
    fontSize: 18,
    padding: 10,
    height: 44

  }
})

export default FlatListBasic;
