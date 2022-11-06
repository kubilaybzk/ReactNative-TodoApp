import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function List({Liste}) {
  return (
    <ScrollView style={{marginTop:12}}>
      {Liste ? (
        Liste.map((item, key) => {
          return (
            <View key={key}>
              <Text style={style.item}>{item}</Text>
            </View>
          );
        })
      ) : (
        <View>
         <Image source={require("../../../asset/logo.png")} />
        </View>
      )}
    </ScrollView>
  );
}
const style=StyleSheet.create({
  item:{
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
    borderStyle:'dashed',
    borderRadius:10,
    fontSize:18
  }
  
})
