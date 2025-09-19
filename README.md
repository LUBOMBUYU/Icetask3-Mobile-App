# Age Validation & Movie Selection App

This is a simple React Native application built with Expo that demonstrates basic navigation, state management, and user input handling. The app consists of two main screens: an age validation screen and a movie selection screen.

## Features

*   **Age Validation**: Users are prompted to enter their age.
    *   Users under 18 are denied access.
    *   Users between 18 and 20 (inclusive) are informed they are not old enough to see the movies.
    *   Users 21 and over are granted access and navigated to the movie selection screen.
*   **Movie Selection**: After successful age validation, users can select a movie from a predefined list by entering a corresponding number.
*   **Simple & Clean UI**: The app has a straightforward and user-friendly interface.
*   **Built with Modern Tools**: Utilizes React Native, TypeScript, and React Navigation.

## Screens

### 1. Age Validation Screen

The initial screen of the application. It features a text input for the user to enter their age. Based on the input, it either denies access with a modal pop-up or navigates to the next screen.

<img src="../agevalidationscreen.png" alt="Age Validation Screen" width="300"/>

### 2. Movie Selection Screen

Accessible only to users aged 21 or older. This screen displays a list of movies. The user can select a movie by typing its number into a text field. The selected movie is then displayed on the screen.

<img src="../movieselectionscreen.png" alt="Movie Selection Screen" width="300"/>

## Screenshots

<img src="../agevalidation.png" alt="Age Validation" width="300"/>
<img src="../movieselection.png" alt="Movie Selection" width="300"/>
<img src="../verification.png" alt="Verification" width="300"/>

## Getting Started

### Prerequisites

*   Node.js
*   Expo CLI (`npm install -g expo-cli`)
*   Expo Go app on your iOS or Android device, or an emulator.

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd AgeApp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npx expo start
    ```

4.  Scan the QR code with the Expo Go app on your mobile device or run on an emulator.