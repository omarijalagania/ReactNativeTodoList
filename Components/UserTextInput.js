import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal  } from 'react-native';

const UserTextInput = ({textHandler, goal,pressHandler ,modal, setModal, disabledBtn}) => {

    return(
        <Modal visible={modal} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add Goal"
                    style={styles.inputText}
                    onChangeText={textHandler}
                    value={goal}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title="Add" disabled={disabledBtn} onPress={pressHandler}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Cancel" color="tomato" onPress={() => setModal(false)}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
        inputText: {
        borderColor: 'black', 
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginBottom: 15
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    btnContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btn: {
        width: '40%'
    }
})


export default UserTextInput;