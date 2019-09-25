import React from "react";
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const AppNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeal: CategoryMealScreen,
  MealDetail: MealDetailScreen
},
{
  initialRouteName: "Categories",
})

export default createAppContainer(AppNavigator)