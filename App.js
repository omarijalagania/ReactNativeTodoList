
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalsItem from './Components/GoalsItem';
import UserTextInput from './Components/UserTextInput';
export default function App() {

const [goal, setGoal] = useState('')
const [listGoals, setListGoals] = useState([]);

const textHandler = (enteredGoal) => {
  setGoal(enteredGoal);
}

const pressHandler = () => {
  setListGoals(currentGoal => [...listGoals, { id: Math.random().toString(), value: goal}])
}

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <UserTextInput textHandler={textHandler} goal={goal} />
          <Button title="Add" onPress={pressHandler}/>
      </View>
      <FlatList data={listGoals} renderItem={itemData => (
        <GoalsItem itemData={itemData}/>
      )}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  }
});
