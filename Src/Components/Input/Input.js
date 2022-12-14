import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Input({SetListe, liste}) {
  const [text, setText] = useState();
  function AddList() {
    SetListe(liste ? [...liste, text] : [text]);
    setText(null)
  }
  return (
    <View style={style.Container}>
      <TextInput
        style={style.Input}
        placeholder="Yapılacaklar ..."
        value={text}
        onChangeText={setText}></TextInput>
      <TouchableOpacity onPress={AddList} style={style.Btn}>
        <Text style={style.BtnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    backgroundColor: 'black',
  },
  Input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    marginRight: 5,
    paddingLeft:15
  },
  Btn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#FFCE2F',
    borderRadius: 10,
  },
  BtnText: {fontSize: 30, color: 'white'},
});
