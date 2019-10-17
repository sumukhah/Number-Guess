import React,{ useState, useRef } from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import NumberContainer from '../../Components/NumberContainer/NumberContainer';
import Card from '../../Components/Card/Card'

const generateRandomGuess = (min, max) => {
  //For generating random guess
  return Math.floor(( Math.random() * (max-min))+min)
}

const GameScreen = ({actualNum}) => {
  const Min = useRef(0)
  const Max = useRef(100)
  const [currentGuess, GuessAgain] = useState(generateRandomGuess(Min.current, Max.current))
  const count = useRef(1)
  
  GuessAgainHandler = (isValGreater) => {
    if(isValGreater===1 && actualNum>currentGuess){
      Min.current = currentGuess
    }
    else if(isValGreater===0 && actualNum<currentGuess){
      Max.current = currentGuess
    }
    else{
      {Alert.alert('You should not lie dude',
      ' Computer Does not know the number but I am your app, I know', 
      [{text:"OK"}],
      )
      }
    }
    GuessAgain(generateRandomGuess(Min.current, Max.current))
    count.current+=1
  }

  return(
    <View style={styles.GameScreen}>
      <View>
        <NumberContainer number={count.current} textSize={20} style={{width:150}}/>
      </View>
      <Card style={styles.GameCard}>
        <NumberContainer number={currentGuess} textSize={20} style={{width:150}}/>
        <View style={styles.ButtonPosition}>
          <Button title="Less" color="#ff3636" onPress={() => GuessAgainHandler(0)}/>
          <Button title='More' color="#ff3636" onPress={() => GuessAgainHandler(1)}/>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  GameScreen:{
    flex:1,
    justifyContent:"space-evenly",
    alignItems:'center',
  },
  ButtonPosition:{
    flexDirection:"row",
    justifyContent:"space-evenly",
  },
  GameCard:{
    height:250,
    width:250,
    justifyContent:'space-evenly'
  }
})

export default GameScreen;