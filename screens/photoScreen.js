import React, { Component } from 'react';
import { Text, View, Image, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

export default class PhotoScreen extends Component {
  render() {
      const { uri } = this.props.route.params;
    return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={Style.container}>
          <FastImage source={{uri: uri}} style={Style.fullImage}/>
        </View>
      </SafeAreaView>
    );
  }
}
Style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fullImage: {
    width: '100%',
    height: '100%',
  }
});
