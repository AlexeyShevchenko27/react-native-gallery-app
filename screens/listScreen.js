import React, { Component } from 'react';
import { Text, View, Image, FlatList, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

export default class ListScreen extends Component {
  constructor(props){
    super(props);
    this.state = { isLoading: true, dataSource: ''}
  }
  componentDidMount() {
    return fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
      .then(response => response.json())
      .then(responseJson => {
        //console.log(JSON.stringify(responseJson))
        var temp = [];
        for (var i = 0; i < responseJson.length; i++) {
            temp.push(responseJson[i]);
          }
        this.setState({
          isLoading: false,
          dataSource: temp,
        })
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    if(this.state.isLoading == true){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>LOADING</Text>
      </View>
    )}
    else return(
        <SafeAreaView style={{flex:1, width: Dimensions.get('window').width}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) =>
              <View style={{flex:1, flexDirection:'row'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PhotoScreen', {
                  uri: item.urls.regular
                    })} >
                  <FastImage source={{ uri: item.urls.thumb}} style={{width: 120, height: 120, margin: 5}}/>
                </TouchableOpacity>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text>Author: {item.user.name}</Text>
                  <Text>Description: {item.alt_description}</Text>
                </View>
              </View>
          }
          />
        </SafeAreaView>
      );
  }
}
