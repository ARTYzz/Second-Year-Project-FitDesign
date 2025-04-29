import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function WelcomeScreen() {
  const { setUserInfo } = useContext(UserContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const calculateBMI = (weight, height) => {
    return (weight / (height / 100) ** 2).toFixed(1);
  };

  const handleSubmit = () => {
    const bmi = calculateBMI(parseFloat(weight), parseFloat(height));
    setUserInfo({ name, age, height, weight, bmi });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FitDesign!</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Continue" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
});
