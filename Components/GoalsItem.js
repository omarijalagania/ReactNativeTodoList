import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalsItem = ({itemData, onDelete}) => {
    return (
        <TouchableOpacity onPress={onDelete.bind(this, itemData.item.id)}>
            <View style={styles.listStyle}>
                <Text>
                    {itemData.item.value}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    listStyle: {
        padding: 10,
        backgroundColor: '#ccc',
        borderRightColor: 'black',
        borderWidth: 1,
        marginTop: 20,
    }
})

export default GoalsItem;