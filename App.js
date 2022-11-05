
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React, { useEffect, useState } from 'react'
import Input from './Src/Components/Input/Input';
import List from './Src/Components/Lists/List';

export default function App() {
  const [liste,SetListe]=useState();

  return (
    <SafeAreaView>
      <View style={style.header}>
        <Text style={style.Title}>React T0-DO App</Text>
      </View>
      <Input SetListe={SetListe} liste={liste}/>
      <List Liste={liste}/>
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
  header:{width:"100%",backgroundColor:"blue",padding:10},
  Title:{textAlign:'center',fontSize:20,fontWeight:'600',color:"white"},
  
})