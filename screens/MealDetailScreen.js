import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import Icon from 'react-native-vector-icons/FontAwesome'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

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
    headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Favorite' iconName='star-o' onPress={() => {  }}/>
    </HeaderButtons>   
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