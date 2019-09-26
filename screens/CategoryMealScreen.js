import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


import { CATEGORIES } from '../data/dummy-data'

const CategoryMealScreen = props => {

  const item = CATEGORIES.find( category => category.id === props.navigation.getParam('itemId') )

  const goTo = () => {
    props.navigation.navigate('MealDetail')
  }

  return(
    <View style={styles.screen}>
      <Text>Categories Screen{item.title}</Text>
      <Button title='Go to Details' onPress={goTo}/>
    </View>
  )
}

CategoryMealScreen.navigationOptions = ({navigation})=> {
  const item = CATEGORIES.find( category => category.id === navigation.getParam('itemId') )

  return {
    headerTitle: item.title,   
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