import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
const API_BASE = "http://192.168.1.17:5000/api/employees/";
export default function EmployeePage({ navigation }) {
  const employeeId = navigation.getParam("_id");
  const deleteBtn = async () => {
    await fetch(API_BASE + employeeId, { method: "DELETE" });

    navigation.navigate("Home");
  };
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.container}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvDNJYSpraxKkrwZgZ7ANIEFG6FYKlvdmujdzOYE&s",
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={globalStyles.employeeInfo}>
          Name: {navigation.getParam("name")}
        </Text>
        <Text style={globalStyles.employeeInfo}>
          Age: {navigation.getParam("age")}
        </Text>
        <Text style={globalStyles.employeeInfo}>Id: {employeeId}</Text>
      </View>
      <View>
        <TouchableOpacity style={globalStyles.deleteBtn} onPress={deleteBtn}>
          <Text style={{ color: "white", fontSize: 15 }}>Delete Employee</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
