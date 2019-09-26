import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {

  const pressItemHandler = id => {
    props.navigation.navigate('CategoryMeal',{ itemId: id })
  }

  const renderItem = category => {
    return (
      <CategoryGridTile 
        onPress={pressItemHandler.bind(this, category.item.id)}
        title={category.item.title}
        color={category.item.color}
      />     
    )
  }

  return(
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderItem} />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoriesScreen