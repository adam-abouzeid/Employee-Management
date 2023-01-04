import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
export default function EmployeePage({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("name")}</Text>
      <Text>{navigation.getParam("age")}</Text>
    </View>
  );
}
