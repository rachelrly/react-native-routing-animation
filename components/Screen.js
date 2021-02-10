import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'
import {useNavigationRoute} from '../hooks/hooks'
import {useNavigation} from '@react-navigation/native'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'



export default function Screen(props){
    const navigation = useNavigation()
    const {color, next} = useNavigationRoute(props.route.name)
    const height = Dimensions.get("window").height

    return(
        <GestureRecognizer
            onSwipeLeft={()=>navigation.navigate(next)}
            onSwipeRight={()=>navigation.navigate(next)}
        >
        <View style={styles.wrapper, {backgroundColor: color, height}}>
            
        </View>
        </GestureRecognizer>
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