import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Chaithra',
      status: 'Just a React Enthusiast!❤',
      imageUrl:
        'https://cdn3.vectorstock.com/i/1000x1000/98/37/girl-with-earrings-icon-flat-single-avatar-vector-14449837.jpg',
    },
    {
      uid: 2,
      name: 'Ram',
      status: 'A React Guide!👦',
      imageUrl:
        'https://www.shareicon.net/data/512x512/2016/05/24/770085_man_512x512.png',
    },
    {
      uid: 3,
      name: 'Kriti',
      status: 'React Learner!👩‍🦰',
      imageUrl: 'https://cdn4.vectorstock.com/i/1000x1000/98/43/girl-icon-flat-single-avatarpeaople-icon-from-vector-14449843.jpg',
    },
    {
        uid: 4,
        name: 'Shyam',
        status: 'A React Course Designer!🧑',
        imageUrl:
          'https://www.shareicon.net/download/2016/05/24/770083_man_512x512.png',
      },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    marginHorizontal: 16,
    marginVertical: 10
  },
  userCard: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#AF9D5A',
    padding: 8,
    borderRadius: 10
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14
  },
  userName:{
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  },
  userStatus:{
    fontSize: 12
  }
});
