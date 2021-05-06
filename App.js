
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

const [goal, setGoal] = useState('')
const [listGoals, setListGoals] = useState([]);
const textHandler = (enteredGoal) => {
  setGoal(enteredGoal);
}

const pressHandler = () => {
  setListGoals(currentGoal => [...listGoals, goal])
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
      <ScrollView>
        {listGoals.map((goal, index) => {

          return(
            <View key={index} style={styles.listStyle}>
              <Text>
                {goal}
              </Text>
            </View>
          )
        })}
      </ScrollView>
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
