import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../context/UserContext";

export default function ProfileScreen() {
  const { userInfo } = useContext(UserContext);
  const navigation = useNavigation();

  const getBMIRange = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {/* Body Image */}
      <Image
        source={require("../assets/body.png")}
        style={styles.bodyImage}
        resizeMode="contain"
      />

      {/* Card Info */}
      <View style={styles.card}>
        <Text style={styles.label}>
          Name: <Text style={styles.value}>{userInfo.name}</Text>
        </Text>
        <Text style={styles.label}>
          Age: <Text style={styles.value}>{userInfo.age}</Text>
        </Text>
        <Text style={styles.label}>
          Height: <Text style={styles.value}>{userInfo.height} cm</Text>
        </Text>
        <Text style={styles.label}>
          Weight: <Text style={styles.value}>{userInfo.weight} kg</Text>
        </Text>
        <Text style={styles.label}>
          BMI:{" "}
          <Text style={styles.value}>
            {userInfo.bmi} ({getBMIRange(userInfo.bmi)})
          </Text>
        </Text>
      </View>

      {/* Update Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Update Profile"
          onPress={() => navigation.navigate("EditProfile")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    padding: 20,
  },
  header: { fontSize: 30, fontWeight: "bold", marginVertical: 20 },
  bodyImage: { width: 200, height: 200, marginBottom: 20 },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    elevation: 5,
  },
  label: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  value: { fontWeight: "normal", color: "#333" },
  buttonContainer: { marginTop: 30, width: "80%" },
});
