import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CategoryGridTile = props => {
  return(
    <View style={styles.cont}>
      <TouchableOpacity onPress={props.onPress} style={styles.gridItem}>
        <View style={{...styles.textContainer, backgroundColor: props.color}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    elevation: 10,
    flex: 1,    
    margin: 15,
    overflow: 'visible',
    height: 110,
  },
  gridItem: {
    flex: 1,
  },
  textContainer: {
    flex: 1,    
    borderRadius: 10,
    padding: 7,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',  
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default CategoryGridTile