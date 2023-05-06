import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{
                uri: 'https://assets-news.housing.com/news/wp-content/uploads/2022/09/10082210/YANA-CAVE-FEATURE-compressed.jpg'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Yana Caves</Text>
            <Text style={styles.cardLabel}>Karnataka</Text>
            <Text style={styles.cardDescription}>Yana is famous for these two massive rock outcrops known as the Bhairaveshwara Shikhara and the Mohini Shikhara. The huge rocks are composed of solid black, crystalline karst limestone.</Text>
            <Text style={styles.cardFooter}>2 hours away</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{
                uri: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWxhcHB1emhhfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Alleppy</Text>
            <Text style={styles.cardLabel}>Kerala</Text>
            <Text style={styles.cardDescription}>Alleppy or Alappuzha, famous for its boat races, beaches, marine products and coir industry, is a world renowned backwater tourist destination of India. It's best known for houseboat cruises along the backwaters.</Text>
            <Text style={styles.cardFooter}>10 hours away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        width: '92%',
        height: 360,
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset: {
            width:1,
            height: 1
        }
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius:10
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel:{
        color: '#000000',
        fontSize: 16,
        marginBottom: 6
    },
    cardDescription:{
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter:{
        color: '#000000',
        fontSize: 10,
        textAlign: 'right'
    }
})