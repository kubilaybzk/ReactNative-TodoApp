import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function List({Liste}) {
  return (
    <ScrollView style={{paddingTop:20,marginTop:12}}>
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
          <Text style={style.item}>Liste Şuan Boş</Text>
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
