import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NumberContainer = ({number, ...props}) => {
  return (
    <View style={{...styles.containerStyle, ...props.style}}>
      <Text style={{fontSize:props.textSize, fontWeight:"500"}}>
        {number}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  containerStyle:{
    padding:5, 
    borderRadius:8,
    alignItems:"center",
    borderWidth:2,
    borderColor:'blue',
  }
})

export default NumberContainer;