import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/user/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import DashboardScreen from "../screens/admin/DashboardScreen";

const Stack = createStackNavigator();

function ClientStack({ name }) {
  console.log("name", name);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: name }}
      />
    </Stack.Navigator>
  );
}
function AdminStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
}

function RootStack(props) {
  const { userType, name } = props;
  if (userType === "client") {
    return <ClientStack name={name} />;
  }
  return <AdminStack />;
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export { RootStack, AuthStack };
