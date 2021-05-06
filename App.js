
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

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
        <TextInput
          placeholder="Add Goal"
          style={styles.inputText}
          onChangeText={textHandler}
          value={goal}
          />
          <Button title="Add" onPress={pressHandler}/>
      </View>
      <FlatList data={listGoals} renderItem={itemData => (
        <View style={styles.listStyle}>
        <Text>
          {itemData.item.value}
        </Text>
      </View>
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
  },

  inputText: {
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
  listStyle: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRightColor: 'black',
    borderWidth: 1,
    marginTop: 20,
  }
});
