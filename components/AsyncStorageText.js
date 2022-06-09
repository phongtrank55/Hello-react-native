import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Button, AS } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            data: []
        };
    }
    componentDidMount = async () => {
        
        try{
            let data = await AsyncStorage.getItem('@data');
            data = JSON.parse(data);
            console.log(data);
            if(data !== null) {           
                this.setState({
                    data 
                })
            }
        }catch(e){
            console.log(e);
        }
    }

    onPressSaveButton = () => {
        if(this.state.text.length){
            let data = this.state.data;
            data.push(this.state.text);


            this.setState({
                text: '', data
                // data: [...this.state.data, this.state.text]
            });
            try{
                AsyncStorage.setItem('@data', JSON.stringify(data));
            }catch(e){
                console.log(e);
            }
        
        }

        this.txtInput.focus();
    }
    render() {
        return (

            <View style={styles.container}>
                <TextInput
                    autoFocus={true}
                    style={styles.search_input}
                    placeholder="Nhập Text đã llưu"
                    onChangeText={text => { this.setState({ text }) }}
                    value={this.state.text}
                    ref={(input) => {this.txtInput = input}}
                />
                <Button
                    title="Lưu"
                    onPress={this.onPressSaveButton}
                />
                <Text>Các text đã lưu</Text>
                <FlatList data={this.state.data}
                    renderItem={({ item }) => <Text style={styles.item}> {item}</Text>}>
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        // flex: 1, justifyContent: "center", alignItems: "center" 
    },
    search_input: {
        borderColor: "gray",
        borderBottomWidth: 1,
        marginBottom: 5,
        padding: 5,
        fontSize: 17,
    },
    item: {
        fontSize: 17
    }
});

export default AsyncStorageText;
