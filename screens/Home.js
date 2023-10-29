import { StyleSheet, Text, View, SafeAreaView, Image, Platform, TouchableOpacity, Alert, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { DATA } from '../components/Home'
import { MasonryFlashList } from '@shopify/flash-list'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Home({home}) {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Ionicons name='search' size={24} color='black' />
        <TextInput style={{width: Dimensions.get("window").width * 0.84}} placeholder='Search Categories' />
      </View>
      <MasonryFlashList 
        data={DATA}
        numColumns={2}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.items} onPress={() => {navigate(item.press), {home}}}>
            <Image style={styles.img} source={{uri: item.image}} />
            <View style={styles.textView}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.number}>{item.number}</Text>
            </View>
          </TouchableOpacity>
        }
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.95,
    width: Dimensions.get("window").width,
    marginTop: Platform.OS === "android" ? 35 : 0
  },
  img: {
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").height * 0.3,
    borderRadius: 8
  },
  items: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "center",
    margin: 15
  },
  textView: {
    backgroundColor: "#FFFFFF",
    width: Dimensions.get("window").width * 0.45,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0
    
  },
  name: {
      fontWeight: "900",
      fontSize: 18,
      opacity: 1
  },
  number: {
    fontSize: 16,
    opacity: 1
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("window").height * 0.05,
    alignSelf: "center",
    borderRadius: 20
  }
})