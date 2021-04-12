import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritesMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const exisitingIndex = state.favoritesMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (exisitingIndex >= 0) {
        const updatedFavMeals = [...state.favoritesMeals];
        updatedFavMeals.splice(exisitingIndex, 1);
        return { ...state, favoritesMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoritesMeals: state.favoritesMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.GultenFree && !meal.isGlutenFree) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
