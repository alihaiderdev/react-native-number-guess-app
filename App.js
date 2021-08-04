import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(); // undefined = false
  const [guessRound, setGuessRound] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRound(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRound > 0) {
    content = <GameOverScreen roundsNumber={guessRound} userNumber={userNumber} onRestart={configureNewGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {/* <StartGameScreen />
      <GameScreen /> */}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

// shortcut keys that you must know
// ctrl + m; // emulator => for open emulator more option window
// ctrl + t; // native debugger tool => for open react native debugger tool port window
// a // terminal => open app on android amulator
// r // terminal => refresh app on android amulator
// press 2 times r at a same time // emulator => refresh app on android amulator

// bolier plate code for every react custom functional component

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// const ComponentName = (props) => {
//   return <View></View>;
// };
// const styles = StyleSheet.create({});
// export default ComponentName;
