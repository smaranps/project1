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
    <View style={{ width: "100%" }}>
      <View style={styling.output}>
        <Text>Min: {low}</Text>
        <Text>Max: {high}</Text>
        <Text>Output:</Text>
        <Text>{randomOutput}</Text>
      </View>
      <View style={{ backgroundColor: "aqua", width: "100%" }}>
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
      <View>
        <Button title="Generate" onPress={generateRandomNumber} />
      </View>
    </View>
  );
}

const styling = StyleSheet.create({
  output: {
    backgroundColor: "Blue",
  }
});
