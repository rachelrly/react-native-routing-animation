import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'
import {useRandomColor} from '../hooks/hooks'
import {useNavigation} from '@react-navigation/native'


export default function Screen(props){
    const navigation = useNavigation()
    const backgroundColor = useRandomColor()
    const height = Dimensions.get("window").height
    return(
        <View style={styles.wrapper, {backgroundColor, height}}>
            <TouchableOpacity
            title='Next' 
            style={styles.button}
            onPress={()=>navigation.navigate('Next')}
            >
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'flex-end',
        width: '100vw',
        paddingTop: '50vh'
    },
    button:{
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})