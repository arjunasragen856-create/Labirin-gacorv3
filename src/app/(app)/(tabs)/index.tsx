import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');
const SIZE = 10;
const CELL = Math.floor(Math.min(width, height - 200) / SIZE);

export default function App() {
  const [player, setPlayer] = useState({ x: 0, y: 0 });
  const [goal] = useState({ x: SIZE - 1, y: SIZE - 1 });
  const [maze] = useState(generateMaze());
  const [steps, setSteps] = useState(0);

  function generateMaze() {
    const m = Array(SIZE).fill(0).map(() => Array(SIZE).fill(1));
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (Math.random() > 0.7) m[i][j] = 0;
      }
    }
    m[0][0] = 0;
    m[SIZE - 1][SIZE - 1] = 0;
    return m;
  }

  const move = (dx: number, dy: number) => {
    const newX = player.x + dx;
    const newY =
