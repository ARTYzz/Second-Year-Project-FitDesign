import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./context/UserContext";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
