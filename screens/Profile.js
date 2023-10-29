import { Image, ScrollView, StyleSheet, Text, View, Pressable, Platform, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, Entypo, FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Profile({ profile }) {
  const { navigate } = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.top}>
        <Pressable style={styles.back} onPress={() => {navigate('Home_', {profile})}}>
          <Ionicons name='caret-back' size={20} color='white' />
          <Entypo name="minus" size={15} color="white" style={styles.dash} />
        </Pressable>
        <View>
          <Ionicons name='settings-outline' size={25} color='black' />
        </View>
      </View>

      <TouchableOpacity style={styles.card1}>
        <Image source={{uri: 'https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?size=626&ext=jpg&ga=GA1.1.1568216874.1685710935&semt=ais'}} style={styles.img} />
        <View style={styles.txts}>
          <Text style={styles.txt1}>Fscreation</Text>
          <Text style={styles.txt2}>Fscreation441@gmail.com</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.card2}>
        <TouchableOpacity style={styles.items}>
          <View style={styles.item}>
            <View style={styles.icon}>
              <Ionicons name='person' color='black' size={24} />
            </View>
            <Text style={styles.txt3}>Personal Details</Text>
          </View>
          <Ionicons name='chevron-forward' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.item}>
            <View style={styles.icon}>
              <FontAwesome5 name="shopping-bag" size={24} color="black" />
            </View>
            <Text style={styles.txt3}>My Order</Text>
          </View>
          <Ionicons name='chevron-forward' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.item}>
            <View style={styles.icon}>
              <Ionicons name='ios-heart' color='black' size={24} />
            </View>
            <Text style={styles.txt3}>My Favorites</Text>
          </View>
          <Ionicons name='chevron-forward' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.item}>
            <View style={styles.icon}>
              <FontAwesome5 name="truck" size={24} color="black" />
            </View>
            <Text style={styles.txt3}>Shipping Address</Text>
          </View>
          <Ionicons name='chevron-forward' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.item}>
            <View style={styles.icon}>
              <FontAwesome name="credit-card-alt" size={24} color="black" />
            </View>
            <Text style={styles.txt3}>My Card</Text>
          </View>
          <Ionicons name='chevron-forward' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items} onPress={() => {navigate('Settings'), {profile}}}>
          <View style={styles.item}>
            <View style={styles.icon}>
              <Ionicons name='settings' color='black' size={24} />
            </View>
            <Text style={styles.txt3}>Settings</Text>
          </View>
          <Ionicons name='chevron-forward' size={24} color='black' />
        </TouchableOpacity>
      </View>

      <View style={styles.card2}>
        <TouchableOpacity style={styles.items}>
            <View style={styles.item}>
              <View style={styles.icon}>
                <Ionicons name="ios-alert-circle" size={24} color="black" />
              </View>
              <Text style={styles.txt3}>FAQs</Text>
            </View>
            <Ionicons name='chevron-forward' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
            <View style={styles.item}>
              <View style={styles.icon}>
              <MaterialIcons name="verified-user" size={24} color="black" />
              </View>
              <Text style={styles.txt3}>Privacy Policy</Text>
            </View>
            <Ionicons name='chevron-forward' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: Platform.OS === "android" ? 35 : 0
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
  },
  dash: {
    marginLeft: -5
  },
  img: {
    width: 70, 
    height: 70,
    borderRadius: 8,
    marginLeft: 20
  },
  card1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
    marginVertical: 30,
    borderRadius: 20,
    backgroundColor: "#EEEEEE",
    elevation: 4,
    height: Dimensions.get("window").height * 0.15,
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center"
  },
  card2: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#DDDDDD",
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 20
  },
  txts: {
    marginLeft: 10
  },
  txt1: {
    fontSize: 20,
    fontWeight: "900"
  },
  txt2: {
    color: "#AAAAAA"
  },
  txt3: {
    fontWeight: "800",
    fontSize: 15,
    marginLeft: 15
  },
  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    backgroundColor: "#EEEEEE",
    width: 40,
    height: 40,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
})