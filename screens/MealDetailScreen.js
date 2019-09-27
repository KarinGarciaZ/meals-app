import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'

const MealDetailScreen = props => {

  const meal = MEALS.find( meal => meal.id === props.navigation.getParam('itemId') )

  return(
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
    </View>
  )
}

MealDetailScreen.navigationOptions = ({navigation})=> {
  const meal = MEALS.find( meal => meal.id === navigation.getParam('itemId') )

  return {
    headerTitle: meal.title,   
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailScreen