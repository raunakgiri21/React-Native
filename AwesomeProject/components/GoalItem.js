import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ item, onDeleteItem }) {
  return (
    <View style={styles.goalBar}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={() => onDeleteItem(item.id)}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalBar: {
    marginTop: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
