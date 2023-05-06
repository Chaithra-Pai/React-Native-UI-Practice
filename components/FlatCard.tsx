import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.card1]}>
            <Text>Reddd</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingTop: 10
    },
    container:{
        flex: 1,
        flexDirection:'row',
        padding: 8
    },
    card:{        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 8,
        borderRadius: 4
    },
    card1:{
        backgroundColor: '#ef5354'
    },
    card2:{
        backgroundColor: '#50dbb4'
    },
    card3:{
        backgroundColor: '#5da3fa'
    }
})