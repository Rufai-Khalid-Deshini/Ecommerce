import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { DATA } from '../components/Notifications'
import { Dimensions } from 'react-native'

export default function Notification() {
  return (
    <SafeAreaView style={styles.items}>
      <Text style={styles.h1}>Notification</Text>
      <FlashList 
        data={DATA}
        renderItem={({ item }) =>
          <View style={styles.gen}>
            <Image style={styles.thumbnail} source={{uri: item.avatar}} />
            <View style={styles.Text}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.content}>{item.content}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
      }
      estimatedItemSize={50}
      showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: "900",
    fontSize: 18,
    margin: 20
  },
  gen: {
    display: "flex",
    flexDirection: "row",
    padding: 15
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15
  },
  items: {
    height: Dimensions.get("window").height * 0.95,
    width: Dimensions.get("window").width,
    marginTop: Platform.OS === "android" ? 35 : 0
  },
  name: {
    fontWeight: "800"
  },
  time: {
    opacity: 0.5
  },
  content: {
    paddingRight: 10
  }
})