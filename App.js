import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Just to get the voice input */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        {/* To show loading, and confirm whether transcribe is correct */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Transcribe"
          component={TranscribeScreen}
        />
        {/* To show loading, and confirm whether translate is correct */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Translate"
          component={TranslateScreen}
        />
        {/* To show search results */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Results"
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
