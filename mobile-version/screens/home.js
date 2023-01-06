import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  TextInput,
  NumberInput,
} from "react-native";
import { globalStyles } from "../styles/global";
import Modal from "react-native-modal";

const API_BASE = "http://192.168.1.17:5000/api/employees/";
export default function Home({ navigation }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   age: "",
  // });
  // const { name, age } = formData;
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const getEmployees = () => {
    fetch(API_BASE + "/")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .then(() => setLoading(false))
      .catch((err) => console.error("Error: ", err));
  };
  useEffect(() => {
    getEmployees();
  }, [employees]);

  const addEmployee = async (e) => {
    const data = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setName("");
    setAge(0);
    setEmployees([...employees, data]);

    handleModal();
  };

  return (
    <View style={globalStyles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Button title="Add an Employee" onPress={handleModal} />

          <FlatList
            style={globalStyles.employeeList}
            numColumns={2}
            keyExtractor={(item) => item._id}
            data={employees}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={globalStyles.viewEmployee}
                onPress={() => navigation.navigate("EmployeePage", item)}
              >
                <Text style={globalStyles.titleText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          <Modal isVisible={isModalVisible}>
            <View style={globalStyles.modalContainer}>
              <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
                Add an Employee
              </Text>
              <TextInput
                placeholder="Enter Employee Name"
                style={globalStyles.formControl}
                value={name}
                onChangeText={(e) => setName(e) && console.log(name)}
              />
              <TextInput
                keyboardType="numeric"
                placeholder="Enter Employee Age"
                style={globalStyles.formControl}
                value={age}
                onChangeText={(e) => setAge(e)}
              />
              <View style={globalStyles.employeeAddModalButtons}>
                <Button
                  style={globalStyles.modalButton}
                  title="Cancel"
                  onPress={handleModal}
                />

                <Button
                  style={globalStyles.modalButton}
                  title="Add Employee"
                  onPress={addEmployee}
                />
              </View>
            </View>
          </Modal>
        </>
      )}
    </View>
  );
}
