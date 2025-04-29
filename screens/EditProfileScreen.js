import {
  ToastAndroid,
  Platform,
  Alert,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";

export default function EditProfileScreen() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [name, setName] = useState(userInfo.name);
  const [age, setAge] = useState(userInfo.age.toString());
  const [height, setHeight] = useState(userInfo.height.toString());
  const [weight, setWeight] = useState(userInfo.weight.toString());
  const navigation = useNavigation();

  const calculateBMI = (weight, height) => {
    return (weight / (height / 100) ** 2).toFixed(1);
  };

  const handleSave = () => {
    const newBMI = calculateBMI(parseFloat(weight), parseFloat(height));
    setUserInfo({
      name,
      age: parseInt(age),
      height: parseFloat(height),
      weight: parseFloat(weight),
      bmi: newBMI,
    });

    // Show Success Toast
    if (Platform.OS === "android") {
      ToastAndroid.show("Profile Updated Successfully!", ToastAndroid.SHORT);
    } else {
      Alert.alert("Success", "Profile Updated Successfully!");
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Your Profile</Text>

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

      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
});
