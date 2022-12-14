import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AddDog from "./addDog";
import DogInfo from "./dogInfo";

export default function DogList() {
  const [dogInfo, setDogInfo] = useState([
    {
      showName: "sNori",
      Name: "Nori",
      DOB: "6/1/2021",
      Majors: 0,
      Points: "0",
      key: "1",
    },
    {
      showName: "sFringe",
      Name: "Fringe",
      DOB: "12/29/21",
      Majors: 0,
      Points: "0",
      key: "2",
    },
    {
      showName: "sPauly",
      Name: "Pauly",
      DOB: "12/29/21",
      Majors: 0,
      Points: "0",
      key: "3",
    },
  ]);

  const updateHandler = (sn, m, p) => {
    setDogInfo((current) =>
      current.map((obj) => {
        if (obj.showName === sn) {
          return { ...obj, Major: m, Points: p };
        }
        return obj;
      })
    );
  };

  const submitHandler = (sn, n, dob, m, p) => {
    setDogInfo((prevDogInfo) => {
      return [
        {
          showName: sn,
          Name: n,
          DOB: dob,
          Majors: m,
          Points: p,
          key: Math.random().toString(),
        },
        ...prevDogInfo,
      ];
    });
  };

  return (
    <ScrollView style={styles.list}>
      <View style={styles.addStyle}>
        <Text>Add a Dog </Text>
        <AddDog submitHandler={submitHandler} />
      </View>
      <Text>Your Dogs </Text>
      {dogInfo.map((item) => {
        return (
          <View key={item.key}>
            <TouchableOpacity style={styles.item}>
              <Text>
                {" "}
                {item.showName} {"\n"} {item.Name} {"\n"} {item.DOB} {"\n"}
                {" Majors Earned: "} {item.Majors} {"\n"}
                {" Points Earned: "}
                {item.Points}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
      <View style={styles.updateStyle}>
        <Text>Update Points </Text>
        <DogInfo updateHandler={updateHandler} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addStyle: {
    height: "36%",
    marginTop: 10,
  },

  updateStyle: {
    height: "35%",
    marginTop: 10,
  },

  list: {
    marginBottom: 10,
    marginTop: -10,
    width: "97%",
    marginLeft: 5,
  },
  item: {
    backgroundColor: "grey",
    marginTop: 24,
    paddingVertical: 20,
    paddingLeft: 5,
  },
});
