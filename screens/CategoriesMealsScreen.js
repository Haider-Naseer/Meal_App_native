import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoriesMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const avaliableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = avaliableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found , maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList ListData={displayMeals} navigation={props.navigation} />;
};

CategoriesMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealScreen;
