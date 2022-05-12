import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

class LogoList extends Component {
  
  logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Image source={this.logo} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
}

export default LogoList;
