**# Take-home Assignment - FitDesign**

---

**Full Name:** Chisanucha Vongtalay  
**Student ID:** 6631503125  
**App Name:** FitDesign  
**Framework Used:** React Native  
**GitHub Repository:** [Insert link here]  
**APK/IPA File Link:** [Insert link here]

---

## 1. App Concept and Design (2 pts)

### 1.1 User Personas

**Persona 1:**  
- Name: Pete  
- Age: 21 years old  
- Occupation: 3rd Year University Student  
- Needs: Wants to plan daily workout routines and track fitness progress.

**Persona 2:**  
- Name: Ann  
- Age: 24 years old  
- Occupation: Office Employee  
- Needs: Wants a simple app recommending daily exercises for better health.

---

### 1.2 App Goals

- Recommend automatic daily workout plans.
- Calculate and track user's BMI (Body Mass Index).
- Allow profile updates for monitoring health progress.

---

### 1.3 Mockup / Screens

**3 Main Screens:**
1. **Home Screen**: Displays weekly workout plan.
2. **Workout Detail Screen**: Shows detailed exercises and sample images.
3. **Profile Screen**: Displays user information and a button to update profile.

(*Attach screenshots or describe visuals if available*)

---

### 1.4 User Flow

Open App > Fill in Profile Info > View Weekly Plan > Click a Day > View Workout Details > Update Profile as Needed

---

## 2. App Implementation (4 pts)

### 2.1 Development Details

**Tools Used:**

- React Native (Expo)
- JavaScript (ES6)
- React Navigation
- Context API
- Animated API

---

### 2.2 Features Implemented

- [x] Input personal data and calculate BMI
- [x] Display weekly workout plan
- [x] Expand/collapse workout details with animation
- [x] Mark exercises as completed
- [x] Auto-complete day and show ✔️ when all exercises done
- [x] Edit and update profile with recalculated BMI
- [x] Toast notification after successful profile update

---

### 2.3 App Screenshots

- ![Home Screen](home.png)
- ![Workout Detail](workout.png)
- ![Profile Update](profile.png)

(*Insert screenshots or links if applicable*)

---

## 3. Deployment (2 pts)

### 3.1 Build Type

- [x] Debug
- [ ] Release

---

### 3.2 Platform Tested

- [x] Android
- [ ] iOS

---

### 3.3 README & Install Guide

**Steps to Install:**

1. Download the .apk file.
2. Open with a File Manager on Android device.
3. Install and open the app "FitDesign."

---

## 4. Reflection (2 pts)

- Learned to manage navigation between Tab and Stack navigators.
- Learned how to manage app-wide data using Context API.
- Practiced implementing animations and native Toast messages.
- If more time, would add BMI history tracking and chart visualization.

---

## 5. AI Assisted Development (Bonus)

### 5.1 Idea Generation

**Prompt Used:**
> Suggest a fitness daily workout app idea for beginner users.

**Result:**
> Got idea for an app that recommends daily workouts and tracks BMI.

---

### 5.2 UI Layout Prompt

**Prompt Used:**
> Design simple layout for daily workout plan and progress tracking in React Native.

**Result:**
> Got structure for Home, Workout, and Profile screens.

---

### 5.3 Code Writing Prompt

**Prompt Used:**
> How to create a collapsible card list in React Native?

**Result:**
> Implemented Animated Expand/Collapse for exercise details.

---

### 5.4 Debug Prompt

**Prompt Used:**
> Why my React Native ToastAndroid not showing after saving data?

**Result:**
> Fixed native driver usage and platform checks.

---

### 5.5 Deployment Prompt

**Prompt Used:**
> How to build APK file from Expo managed workflow?

**Result:**
> Learned `eas build -p android` and .apk testing process.

---

