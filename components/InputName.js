import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

class InputName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ''
    };
    this.txtName = React.createRef();
  }

  componentDidMount = () => {
    this.txtName.current.focus();
  }

  onPress = () => {
    this.setState({
      name: this.txtName.current.value
    })

  }

  render() {
    return (
      <View>
        <TextInput ref={this.txtName} style={{borderColor:"gray", borderWidth: '1px', marginBottom:'5px'}} placeholder="Họ tên của bạn"/>
        <Button title='OK' value={this.state.name} onPress={this.onPress}/>
        <Text> Họ tên bạn vừa nhập: {this.state.name} </Text>
      </View>
    );
  }
}

export default InputName;
