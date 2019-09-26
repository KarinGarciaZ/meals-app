import React from "react";
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation"
import Colors from '../constants/Colors'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const AppNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories',
    }
  },
  MealDetail:{
    screen: MealDetailScreen,
    navigationOptions: {
      headerTitle: 'Meal Detail',
    }
  },   
  CategoryMeal: CategoryMealScreen,
},
{
  mode: 'modal',
  //initialRouteName: "Categories",  
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: Colors.primaryColor
    }
  }
})

export default createAppContainer(AppNavigator)