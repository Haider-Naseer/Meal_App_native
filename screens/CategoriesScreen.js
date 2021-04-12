import { StyleSheet, FlatList } from "react-native";
import React, { useEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const CategoriesScreen = (props) => {
  // useEffect(() => {
  //   navigation.setParams({ scrollToTop: _scrollToTop });
  // }, [scrollToTop]);

  // _scrollToTop = () => {
  //   if (this.scrollview) {
  //     this.scrollview.scrollTo({ x: 0, y: 0, animated: true });
  //   }
  // };

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoriesMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      // ref={(scrollview) => {
      //   scrollview = scrollview;
      // }}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meals Categories ",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoriesScreen;

// <View style={styles.screen}>
//   <Text>Categories Screen</Text>
//   <Button
//     title="Go to Meals"
//     onPress={() => {
//       props.navigation.navigate({ routeName: "CategoriesMeals" });
//     }}
//   />
// </View>
