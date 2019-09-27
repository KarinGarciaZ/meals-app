import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const MealGridTile = props => {
  return(
    <TouchableOpacity onPress={props.onPress} style={styles.gridItem}>
      <Image source={{uri: props.imageUrl}} style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    marginHorizontal: 30,
    marginVertical:15,
    height: 290,
    elevation: 15,
    borderRadius: 5,
    overflow: 'hidden'
  },
  textContainer: {
    flex: 1,    
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 8,
    justifyContent: 'flex-end',
    alignItems: 'center', 
    backgroundColor: 'orangered', 
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  image: {
    height: 250, 
    width: '100%'
  }
})

export default MealGridTile