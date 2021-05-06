import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalsItem = ({itemData}) => {
    return (
        <View style={styles.listStyle}>
            <Text>
                {itemData.item.value}
            </Text>
        </View>
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