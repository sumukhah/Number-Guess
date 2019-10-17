import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet, 
  Button, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard, 
} from 'react-native';
import Card from '../../Components/Card/Card';
import Colors from '../../../constants/Colors/Colors'
import CustomInput from '../../Components/CustomInput/CustomInput';
import NumberContainer from '../../Components/NumberContainer/NumberContainer';

const StartGameScreen = (props) => {
  const [val, changeValue] = useState('')
  const [confirmedNum, setConfirmNum] = useState('')

  const InputTextChangeHandler = (txt) => {
    if(txt%1===0){
      changeValue(txt)
    }
  }

  const buttonHandlers = (value='') => {
      changeValue(value)
      setConfirmNum(value)
      if(value!==''){
        Keyboard.dismiss()
      }
  }

  confirmedOutput = confirmedNum!==''?(
    <Card style={styles.ConfirmNumberCard}>
      <Text style={{fontSize:20}}>
        Selected Number is 
      </Text>
      <NumberContainer style={styles.NumberContainer} number={confirmedNum} textSize={20}/>
      <Button color='#6a54cc' title='Start Game' onPress={()=>props.gameStartClearButton(confirmedNum)}/>
    </Card>
  ):null

  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.ScreenStyle} behavior='padding' enabled>
        <Text style={styles.title}>
          Start A New Game
        </Text>
        <Card style={styles.GameConfigCard}>
          <Text style={{fontSize:22, color:Colors.Ternary}}>
            Select a Number
          </Text>
          <CustomInput 
            style={styles.InputTextStyle}
            keyboardType='number-pad'
            autoFocus={true}
            blurOnSubmit={true}
            maxLength={2}
            onChangeText={text => InputTextChangeHandler(text)} 
            value={val}
          />
          <View style={styles.ButtonContainerStyle}>
            <View style={styles.ButtonStyle}>
              <Button title="Submit" color={Colors.Quad} onPress={() => buttonHandlers(val)}/>
            </View>
            <View style={styles.ButtonStyle}>
              <Button title="Reset" color={Colors.Quad} onPress={() => buttonHandlers()}/>
            </View>
          </View>
        </Card>
          {this.confirmedOutput}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  ScreenStyle:{
    flex:1,
    padding:20,
    textAlign:"center",
    justifyContent:"space-evenly",
    alignItems:'center',
    // borderWidth:5,
  },
  title:{
    // borderWidth:5,
    fontSize:30,
    color:Colors.Secondary,
  },
  ButtonContainerStyle:{
    width:'100%',
    flexDirection:"row",
    // backgroundColor:'yellow',
    justifyContent:"space-evenly",

  },
  InputTextStyle:{
    borderBottomColor:'black',
    // borderWidth:2,
    // height:40,
    borderBottomWidth:0.9,
    width:120,
    textAlign:"center",
    fontSize:22,
  },
  GameConfigCard:{
    width:'70%',
    height:'35%',
  },
  ButtonStyle:{
    width:100,
  },
  NumberContainer:{
    width:100,
  },
  ConfirmNumberCard:{
    width:200,
  }
})

export default StartGameScreen;