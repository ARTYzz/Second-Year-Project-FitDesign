const workoutData = [
  {
    day: "Monday",
    focus: "Strength",
    exercises: [
      {
        name: "Push-ups",
        detail: "3 sets of 15 reps",
        image: require("../assets/pushups.png"),
      },
      {
        name: "Squats",
        detail: "4 sets of 12 reps",
        image: require("../assets/squats.png"),
      },
      {
        name: "Plank",
        detail: "3 sets, hold 1 min",
        image: require("../assets/plank.png"),
      },
    ],
  },
  {
    day: "Tuesday",
    focus: "Cardio",
    exercises: [
      {
        name: "Running 5km",
        detail: "Complete within 30 minutes",
        image: require("../assets/running.png"),
      },
      {
        name: "Jump rope",
        detail: "5 minutes continuous",
        image: require("../assets/jumprope.png"),
      },
      {
        name: "Cycling",
        detail: "Ride for 20 km",
        image: require("../assets/cycling.png"),
      },
    ],
  },
  {
    day: "Wednesday",
    focus: "Recovery",
    exercises: [
      {
        name: "Yoga",
        detail: "20 minutes stretching",
        image: require("../assets/yoga.png"),
      },
      {
        name: "Stretching",
        detail: "Full body 15 minutes",
        image: require("../assets/stretching.png"),
      },
      {
        name: "Breathing exercises",
        detail: "10 minutes deep breathing",
        image: require("../assets/breathing.png"),
      },
    ],
  },
  {
    day: "Thursday",
    focus: "Strength",
    exercises: [
      {
        name: "Deadlifts",
        detail: "3 sets of 8 reps",
        image: require("../assets/deadlifts.png"),
      },
      {
        name: "Bench Press",
        detail: "4 sets of 10 reps",
        image: require("../assets/benchpress.png"),
      },
      {
        name: "Pull-ups",
        detail: "3 sets of 10 reps",
        image: require("../assets/pullups.png"),
      },
    ],
  },
  {
    day: "Friday",
    focus: "Cardio",
    exercises: [
      {
        name: "Swimming",
        detail: "20 laps freestyle",
        image: require("../assets/swimming.png"),
      },
      {
        name: "HIIT",
        detail: "20 minutes high intensity",
        image: require("../assets/hiit.png"),
      },
      {
        name: "Boxing",
        detail: "15 minutes punching bag",
        image: require("../assets/boxing.png"),
      },
    ],
  },
  {
    day: "Saturday",
    focus: "Full Body",
    exercises: [
      {
        name: "Bodyweight Circuit",
        detail: "5 rounds",
        image: require("../assets/bodyweight.png"),
      },
      {
        name: "Burpees",
        detail: "3 sets of 20 reps",
        image: require("../assets/burpees.png"),
      },
      {
        name: "Mountain Climbers",
        detail: "3 sets of 40 seconds",
        image: require("../assets/mountainclimbers.jpg"),
      },
    ],
  },
  {
    day: "Sunday",
    focus: "Rest",
    exercises: [], // No exercise for rest day
  },
];

export default workoutData;
