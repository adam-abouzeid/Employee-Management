import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 8,
  },
  viewEmployee: {
    border: 1,
    backgroundColor: "#E3DBDA",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    marginRight: 15,
    width: 152,
  },
  employeeList: {
    marginTop: 20,
  },
  employeeAddModalButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  modalButton: {
    margin: 20,
    color: "#ddd",
  },
  formControl: {
    backgroundColor: "#ddd",
    width: 250,
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
