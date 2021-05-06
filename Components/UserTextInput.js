import React from 'react';
import { StyleSheet, TextInput  } from 'react-native';

const UserTextInput = ({textHandler, goal}) => {
    return(
        <TextInput
            placeholder="Add Goal"
            style={styles.inputText}
            onChangeText={textHandler}
            value={goal}
        />
    );
}

const styles = StyleSheet.create({
        inputText: {
        borderColor: 'black', 
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: '80%',
    }
})


export default UserTextInput;