import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "./MealItem";

const MealList = (props) => {
  const favoritesMeals = useSelector((state) => state.meals.favoritesMeals);

  const renderMealsIteam = (itemData) => {
    const isFavorites = favoritesMeals.some(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              //if the title is not loading fast
              //mealTitle:itemData.item.title
              isFav: isFavorites,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.List}>
      <FlatList
        data={props.ListData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealsIteam}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  List: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
