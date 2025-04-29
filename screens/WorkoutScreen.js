import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from "react-native";

export default function WorkoutScreen({ route }) {
  const { workout } = route.params;
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);
  const animatedHeights = useRef({}).current;

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      Animated.timing(animatedHeights[index], {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }).start(() => setExpandedIndex(null));
    } else {
      if (expandedIndex !== null && animatedHeights[expandedIndex]) {
        Animated.timing(animatedHeights[expandedIndex], {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
      if (!animatedHeights[index]) {
        animatedHeights[index] = new Animated.Value(0);
      }
      Animated.timing(animatedHeights[index], {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }).start();
      setExpandedIndex(index);
    }
  };

  const toggleComplete = (index) => {
    setCompletedExercises((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isDayCompleted =
    workout.exercises.length > 0 &&
    completedExercises.length === workout.exercises.length;

  return (
    <View style={styles.container}>
      <Text style={styles.motivation}>Let's Get Moving! 🚀</Text>

      {/* Header Card */}
      <View
        style={[styles.headerCard, isDayCompleted && styles.headerCompleted]}
      >
        <View style={styles.headerRow}>
          <Text style={styles.dayTitle}>{workout.day}</Text>
          {isDayCompleted && <Text style={styles.completedTick}>✅</Text>}
        </View>
        <Text style={styles.focusText}>Focus: {workout.focus}</Text>
      </View>

      {/* Exercise List */}
      <FlatList
        data={workout.exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          if (!animatedHeights[index]) {
            animatedHeights[index] = new Animated.Value(0);
          }
          const isExpanded = expandedIndex === index;
          const isCompleted = completedExercises.includes(index);

          return (
            <TouchableOpacity
              style={[styles.exerciseCard, isCompleted && styles.completedCard]}
              onPress={() => toggleExpand(index)}
              onLongPress={() => toggleComplete(index)}
            >
              <View style={styles.row}>
                <View
                  style={[styles.circle, isCompleted && styles.completedCircle]}
                >
                  <Text style={styles.circleText}>{index + 1}</Text>
                </View>
                <Text
                  style={[
                    styles.exerciseText,
                    isCompleted && styles.completedText,
                  ]}
                >
                  {item.name}
                </Text>
                <Text style={styles.arrowIcon}>{isExpanded ? "▲" : "▼"}</Text>
              </View>

              <Animated.View
                style={[
                  styles.expandContent,
                  {
                    height: animatedHeights[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 180],
                    }),
                  },
                ]}
              >
                {isExpanded && (
                  <View>
                    <Text style={styles.detailText}>{item.detail}</Text>
                    <Image
                      source={item.image}
                      style={styles.exerciseImage}
                      resizeMode="contain"
                    />
                  </View>
                )}
              </Animated.View>
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
  motivation: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3b82f6",
    textAlign: "center",
    marginBottom: 20,
  },
  headerCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
  },
  headerCompleted: {
    backgroundColor: "#e0ffe0",
    borderColor: "#16a34a",
    borderWidth: 1.5,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 10,
    color: "#1e40af",
  },
  completedTick: {
    fontSize: 28,
  },
  focusText: { fontSize: 18, color: "#555" },

  exerciseCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  completedCard: {
    backgroundColor: "#e6ffe6",
    borderColor: "#22c55e",
    borderWidth: 1.5,
  },
  row: { flexDirection: "row", alignItems: "center" },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  completedCircle: {
    backgroundColor: "#22c55e",
  },
  circleText: { color: "white", fontWeight: "bold", fontSize: 18 },
  exerciseText: { flex: 1, fontSize: 18, color: "#333" },
  completedText: { textDecorationLine: "line-through", color: "#16a34a" },
  arrowIcon: { fontSize: 20, color: "#555" },
  expandContent: { overflow: "hidden" },
  detailText: { fontSize: 16, color: "#555", marginVertical: 10 },
  exerciseImage: { width: "100%", height: 120, borderRadius: 10 },
});
