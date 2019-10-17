import React, {useState} from 'react';
import { StyleSheet, View, AppRegistry, Text } from 'react-native';
import AppHeader from './src/Components/AppHeader/AppHeader';
import StartGameScreen from './src/Screens/StartGameScreen/StartGameScreen';
import GameScreen from './src/Screens/GameScreen/GameScreen';

function App() {
  const [guessedNumber, setGuessNumber] = useState(''); 

  const gameStartClearButtonHandler = (number) => {
    alert(number)
    if(number){
      setGuessNumber(number)
    }
    else{
      setGuessNumber('')
    }
  }
  content = guessedNumber?
    <GameScreen actualNum={guessedNumber}/>
    :<StartGameScreen gameStartClearButton={gameStartClearButtonHandler}/>
  return (
    <View style={styles.AppPageStyle}>
      <AppHeader/>
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  AppPageStyle:{
    flex:1,
    justifyContent:"center",
  }
})

export default App;