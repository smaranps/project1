import { View, Text, Button } from "react-native";
import React, { useCallback, useState } from "react";
import RangeSlider from "rn-range-slider";
import Thumb from "./Thumb";
import Rail from "./Rail";
import RailSelected from "./RailSelected";
import Label from "./Label";
import Notch from "./Notch";
import styles from "rn-range-slider/styles";
import { StyleSheet } from "react-native";
export default function Slider({ min, max }) {
  const [low, setLow] = useState(100);
  const [high, setHigh] = useState(100);
  const [randomOutput, setRandomOutput] = useState(0);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  const generateRandomNumber = () => {
    const range = high - low;

    const randomFloat = Math.random() * range + low;
    const randomInt = Math.round(randomFloat);
    setRandomOutput(randomInt);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#CDE8E5" }}>
      <View style={styling.output}>
        <View style={styling.minMax}>
          <Text style={styling.minMaxText}>Min: {low}</Text>
          <Text style={styling.minMaxText}>Max: {high}</Text>
        </View>
        <View style={styling.randomNumber}>
          <Text style={styling.randomNumberText}>{randomOutput}</Text>
        </View>
      </View>
      <View style={styling.input}>
        <View style={styling.slider}>
          <RangeSlider
            style={styles.slider}
            min={0}
            max={100}
            step={1}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onValueChanged={handleValueChange}
          />
        </View>
        <View style={styling.button}>
          <Button title="Generate" onPress={generateRandomNumber} />
        </View>
      </View>
    </View>
  );
}

const styling = StyleSheet.create({
  output: {
    flex: 1,
    backgroundColor: "#EEF7FF",
  },
  minMax: {
    flex: 1,
    backgroundColor: "#7AB2B2",
    flexDirection: "row",
    padding: 20,
  },
  minMaxText: {
    flex: 1,
    fontSize: 45,

    textAlignVertical: "center",
  },
  randomNumber: {
    flex: 3,
  },
  randomNumberText: {
    fontSize: 150,
    textAlign: "center",
  },
  input: {
    flex: 1,
    padding: 20,
  },
  slider: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
});
