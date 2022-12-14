import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function DogInfo({ updateHandler }) {
  const [showName, setShowName] = useState("");
  const [pointsEarned, setPointsEarned] = useState("");
  const [majorsEarned, setMajorsEarned] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text>Enter Show Name of the dog you would like to update: </Text>
      <TextInput
        style={styles.inputBox}
        onChangeText={(val) => setShowName(val)}
      />
      <Text>{showName} </Text>

      <Text>Enter new points earned below by dog: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.inputBox}
        onChangeText={(val) => setPointsEarned(val)}
      />
      <Text>{pointsEarned} </Text>

      <Text>
        Enter amount of majors earned of the new points (Enter 0 if none were
        earned):{" "}
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.inputBox}
        onChangeText={(val) => setMajorsEarned(val)}
      />
      <Text>{majorsEarned} </Text>

      <Button
        onPress={() => updateHandler(showName, majorsEarned, pointsEarned)}
        title="Add Points"
        color="black"
        style={styles.pointsButton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    width: "100%",
    height: "75%",
    marginTop: 10,
  },

  nameStyle: {
    fontSize: 23,
    textAlign: "center",
    backgroundColor: "#cbc3e3",
  },

  inputBox: {
    borderWidth: 1,
    borderColor: "#777",
    backgroundColor: "#fff",
    padding: 8,
    margin: 10,
    width: "75%",
  },

  pointsButton: {},

  dogInfoDisplayed: {
    fontSize: 15,
    marginTop: 10,
  },
});
