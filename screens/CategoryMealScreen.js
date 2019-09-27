import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealGridTile from '../components/MealGridTile'

const CategoryMealScreen = props => {

  const category = CATEGORIES.find( category => category.id === props.navigation.getParam('itemId') )
  const meals = MEALS.filter( meal => !(-1 === meal.categoryIds.indexOf(category.id)))

  const pressItemHandler = id => {
    props.navigation.navigate('MealDetail',{ itemId: id })
  }

  const renderMeals = meal => {
    return(
      <MealGridTile 
        onPress={pressItemHandler.bind(this, meal.item.id)}
        title={meal.item.title}
        imageUrl={meal.item.imageUrl}
      />
    )
  }

  return(
    <FlatList data={meals} renderItem={renderMeals}/>
  )
}

CategoryMealScreen.navigationOptions = ({navigation})=> {
  const category = CATEGORIES.find( category => category.id === navigation.getParam('itemId') )

  return {
    headerTitle: category.title,   
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealScreen