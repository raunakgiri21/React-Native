import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const renderMealItem = (mealItem) => {
    const pressHandler = () => {
      navigation.navigate("MealDetail", {mealId: mealItem.item.id})
    }
    return (
      <MealItem
        title={mealItem.item.title}
        imageURL={mealItem.item.imageUrl}
        duration={mealItem.item.duration}
        affordability={mealItem.item.affordability}
        complexity={mealItem.item.complexity}
        onPress={pressHandler}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
