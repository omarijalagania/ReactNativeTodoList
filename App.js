
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalsItem from './Components/GoalsItem';
import UserTextInput from './Components/UserTextInput';
export default function App() {

const [goal, setGoal] = useState('')
const [listGoals, setListGoals] = useState([]);
const [modal, setModal] = useState(false);
const [disabledBtn, setDisabledBtn] = useState(true);

const textHandler = (enteredGoal) => {

  if(enteredGoal !== '' ) {
    setGoal(enteredGoal);
    setDisabledBtn(false)
  }else {
    setDisabledBtn(true);
    setGoal('');
  }
  
}

const pressHandler = () => {
    setListGoals(currentGoal => [...listGoals, { id: Math.random().toString(), value: goal}]);
    setModal(false);
    setGoal('');
    setDisabledBtn(true)
}

const onDelete = (id) => {
  setListGoals(currentGoal => {
    return listGoals.filter((goal) => goal.id !== id )
  });
}


  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModal(true)} />
        <UserTextInput textHandler={textHandler} goal={goal} pressHandler={pressHandler} modal={modal} setModal={setModal} disabledBtn={disabledBtn}/>
      <FlatList data={listGoals} renderItem={itemData => (
        <GoalsItem itemData={itemData} onDelete={onDelete}/>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 80
  },
});
