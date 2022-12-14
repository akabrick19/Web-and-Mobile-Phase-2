import { StyleSheet, View, StatusBar, Platform } from "react-native";
import React, { useState } from "react";
import Header from "./components/header";
import DogList from "./Screens/listOfDogs";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <DogList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#cbc3e3",
  },
});
