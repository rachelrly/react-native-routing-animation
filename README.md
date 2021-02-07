# React Native Routing and Animation

This repository is an exercise for animating page switches in a React Native app that uses React Navigation.

## Stack
- React Native
- React Navigation
- React Native Reanimated

## Codebase

### App.js

Contains the `Navigation Container`, which wraps the `Stack`.

### Components
 
#### Screen.js

Renders every screen. This calls a custom hook that returns a random background color. 

### Hooks/hooks.js

#### useRandomColor()

Generates random color from set of 8.