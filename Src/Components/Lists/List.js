import React, {useState} from 'react';
import {Text, View} from 'react-native';

export default function List({List}) {
  return (
    <View>
      {List?List.map((item, key) => {
        return (
          <View key={key}>
            <Text>{item}</Text>
          </View>
        );
      }):
      <View>
        <Text style={{fontSize:24}}>Selam Çukulatam</Text>
        </View>}
    </View>
  );
}
