import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import EmployeePage from "../screens/EmployeePage";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
    },
  },
  EmployeePage: {
    screen: EmployeePage,
    navigationOptions: {
      title: "Employee",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "blue",
    },
    headerTintColor: "white",
  },
});

export default createAppContainer(HomeStack);
