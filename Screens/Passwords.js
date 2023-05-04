import { StyleSheet,View, Text, FlatList, SafeAreaView, StatusBar, Dimensions} from 'react-native'
import React from 'react'
import Passwordss from './data'
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default function Passwords() {

  const route = useRoute();
  const {passwords} = route.params;
  // console.log(props.passwords)


  return (
    <View style = {styles.container}>
      <StatusBar style = 'auto'/>
        <View style = {styles.passcontainer}>
        <FlatList
        data={passwords}
        renderItem={({ item }) => (
          <View style = {styles.cards}>
            <View>
              <Text style = {styles.text}>{item.name}</Text>
              <Text style = {styles.text}>{item.website}</Text>
              <Text style = {styles.text}>{item.password}</Text>
            </View>
            <View>
              <Ionicons name="trash-outline" size={29} color="#fff" style = {styles.icon}/>
            </View>
            
          </View>
        )}
        initialScrollIndex={0}
        keyExtractor={(item, index) => index.toString()}
      />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Width * 1.15,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  passcontainer: {
    width: Width,
    marginTop: Height * 0.02,
    height: Height * 0.9,
    marginLeft: -18
  },

  cards: {
    width:Width * 0.9,
    height: Height * 0.09,
    paddingVertical: 12,
    backgroundColor: '#080808',
    borderRadius: 5,
    marginTop: Height * 0.05,
    paddingLeft: 30,
    borderRadius: 27,
    shadowColor: '#bebebe',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#fff',
    fontSize: 15
  },
  icon: {
    marginLeft: -50,
    marginTop: 10
  },
});