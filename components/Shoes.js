import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Pressable, Modal } from 'react-native'
import React from 'react'
import { Ionicons, Entypo } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list'
import { DATA } from './ShoeList'
import { useNavigation } from '@react-navigation/native'

export default function Shoes({ home }) {

  const { navigate } = useNavigation();

  return (
    <Modal style={styles.container}>
      <View style={styles.top}>
        <Pressable style={styles.back} onPress={() => {navigate('Home_', {home})}}>
          <Ionicons name='caret-back' size={20} color='white' />
          <Entypo name="minus" size={15} color="white" style={styles.dash} />
        </Pressable>
        <View>
          <Ionicons name='search' size={40} color='black' />
        </View>
      </View>

      <Text style={styles.head}>Shoes</Text>

      <FlashList 
        data={DATA}
        numColumns={2}
        estimatedItemSize={50}
        renderItem={({ item }) => 
          <TouchableOpacity style={styles.items}>
            <Image style={styles.img} source={{uri: item.image}} />
            <Text style={styles.np}>{item.name}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <Text style={styles.np}>{item.price}</Text>
          </TouchableOpacity>
        }
      />
    </Modal>
  )
}

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").height * 0.3,
    borderRadius: 8
  },
  head: {
    fontWeight: '900',
    marginLeft: 15,
    fontSize: 25,
    marginTop: 15
  },
  dash: {
    marginLeft: -5
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10
  },
  np: {
    fontWeight: '800'
  },
  desc: {
    color: "#AAAAAA"
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 13
  },
  container: {
    height: Dimensions.get("window").height * 0.935,
    width: Dimensions.get("window").width
  },
  back: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
})