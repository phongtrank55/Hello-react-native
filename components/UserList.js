import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount = () => {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const {page, seed} = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;

    this.setState({loading: true});

    fetch(url).then(res => res.json())
      .then(res => {
        // console.log(res);
        this.setState({
          data : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      }).catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
    
  }


  render() {
    return (
      <View style={styles.container}>
        {this.state.loading 
          ? <Text> Loading... </Text>
          : <FlatList 
                data={this.state.data}
                renderItem = {({item}) => (
                  
                    <ListItem key={item.email} bottomDivider>
                      <Avatar rounded source={{uri: item.picture.thumbnail}} />
                      <ListItem.Content>
                        <ListItem.Title>{`${item.name.last} ${item.name.first}`}</ListItem.Title>
                        <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>                  
                )}
                keyExtractor={item => item.email}
              />
        }
      </View>
    );
  }
  
  
}

const styles = StyleSheet.create({
  container : {
    justifyContent: 'center',
    flex: 1,
  
  }
});

export default UserList;
