
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React, { useState } from 'react'
import Input from './Src/Components/Input/Input';
import List from './Src/Components/Lists/List';

export default function App() {
  const [state,SetState]=useState(["Merhaba","Dünya"]);
  return (
    <SafeAreaView>
      <View style={style.header}>
        <Text style={style.Title}>React T0-DO App</Text>
      </View>
      <Input/>
      <List List={state}/>
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
  header:{width:"100%",backgroundColor:"blue"},
  Title:{textAlign:'center',fontSize:24,fontWeight:'600'},
  
})