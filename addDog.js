import { StyleSheet, Text, TextInput, ScrollView, Button } from "react-native";
import React, { useState } from "react";

export default function AddDog({ submitHandler }) {
  const [showName, setShowName] = useState("");
  const [Name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [MajorNum, setMajorNum] = useState("");
  const [points, setPoints] = useState("");

  return (
    <ScrollView style={styles.inputView}>
      <Text> Show Name: </Text>
      <TextInput
        style={styles.inputBox}
        onChangeText={(val) => setShowName(val)}
      />

      <Text> Name: </Text>
      <TextInput style={styles.inputBox} onChangeText={(val) => setName(val)} />

      <Text> Date of Birth: </Text>
      <TextInput style={styles.inputBox} onChangeText={(val) => setdob(val)} />

      <Text> Number of Majors: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.inputBox}
        onChangeText={(val) => setMajorNum(val)}
      />

      <Text> Point Total: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.inputBox}
        onChangeText={(val) => setPoints(val)}
      />

      <Button
        onPress={() => submitHandler(showName, Name, dob, MajorNum, points)}
        title="Add Dog"
        color="black"
        style={styles.addButton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputView: {
    height: "80%",
    width: "100%",
    fontSize: 20,
    backgroundColor: "grey",
    marginTop: 5,
    marginBottom: 10,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: "#777",
    backgroundColor: "#fff",
    padding: 8,
    margin: 10,
    width: "75%",
  },

  addButton: {},
});
