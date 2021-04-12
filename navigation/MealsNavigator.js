import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import CategoriesMealScreen from "../screens/CategoriesMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Color";
import FavoritesScreen from "../screens/FavoritesScren";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FiltersScreen from "../screens/FiltersScreen";
import { Text, useWindowDimensions } from "react-native";

// const _tabBarOnPress = (scene, jumpToIndex) => {
//   const { route, index, focused } = scene;

//   if (route.index === 0) { // inside 1st screen of StackNavigator
//     const stackNavigation = route.routes[0]; // same as 'this.props.navigation.state' inside component
//     if (!!stackNavigation && !!stackNavigation.params && !!stackNavigation.params.scrollToTop) {
//       stackNavigation.params.scrollToTop();
//     }
//   }

//   jumpToIndex(index);
// };

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meals Categories ",
      },
    },
    CategoriesMeals: {
      screen: CategoriesMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const MealsFavTabNavigator = createMaterialBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
        tabBarColor: "green",
        tabBarLabel: (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals !</Text>
        ),
        // tabBarOnPress: _tabBarOnPress,
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: "Favorites !",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    //createBottomTabNavigator
    // tabBarOptions: {
    //   activeTintColor: Colors.accentColor,
    // },
    activeColor: "white",
    shifting: true,
    // If we want to change color without shift
    // barStyle: {
    //   backgroundColor: "red",
    // },

    //For IOS

    // lableStyle: {
    //   fontFamily: "open-sans",
    // },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals !",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: "red",
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);
export default createAppContainer(MainNavigator);
