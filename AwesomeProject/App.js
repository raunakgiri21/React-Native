import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevState) => [
      ...prevState,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          visible={modalIsVisible}
          onPress={() => setModalIsVisible((prevState) => !prevState)}
        />
        <GoalInput
          visible={modalIsVisible}
          addGoalHandler={addGoalHandler}
          onCancel={() => setModalIsVisible(false)}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                item={itemData.item}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
