import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import workoutData from "../data/workoutData";

export default function MainScreen() {
  const navigation = useNavigation();

  const todayDay = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Workout Plan</Text>

      <FlatList
        data={workoutData}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => {
          const isToday = item.day === todayDay;

          return (
            <TouchableOpacity
              style={[styles.cardWrapper, isToday && styles.todayWrapper]}
              onPress={() =>
                item.exercises.length > 0 &&
                navigation.navigate("Workout", { workout: item })
              }
              disabled={item.exercises.length === 0}
            >
              {/* Left Gold Bar */}
              {isToday && <View style={styles.goldBar} />}

              {/* Card Content */}
              <View style={styles.cardContent}>
                <Text style={[styles.weekday, isToday && styles.todayText]}>
                  {item.day}
                </Text>
                <Text style={styles.focus}>Focus: {item.focus}</Text>
                {item.exercises.length > 0 ? (
                  <Text style={styles.exercises}>
                    Exercises: {item.exercises.length} moves
                  </Text>
                ) : (
                  <Text style={styles.restText}>Rest Day 💤</Text>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2", padding: 20 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  cardWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  todayWrapper: {
    backgroundColor: "#dbeafe", // light blue background for today
  },
  goldBar: {
    width: 8,
    backgroundColor: "#FFD700", // Gold color
  },
  cardContent: {
    flex: 1,
    padding: 20,
  },

  weekday: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#3b82f6",
  },
  todayText: { color: "#1e40af" },
  focus: { fontSize: 16, color: "#555", marginBottom: 5 },
  exercises: { fontSize: 16, color: "#777" },
  restText: { fontSize: 16, fontWeight: "bold", color: "red" },
});
