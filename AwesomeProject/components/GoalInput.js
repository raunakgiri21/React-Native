import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ addGoalHandler, onCancel, visible }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const onAddGoal = () => {
    addGoalHandler(enteredGoalText);
    onCancel();
    setEnteredGoalText("");
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/favicon.png")}
        />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={onAddGoal}
              color='#b180f0'
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={onCancel}
              color='#f31282'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    width: "100%",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
