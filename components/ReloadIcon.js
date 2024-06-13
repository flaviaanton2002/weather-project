import { View, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../utils/index";

export default function ReloadIcon({ load }) {
  return (
    <View style={styles.reloadIcon}>
      <FontAwesome5
        onPress={load}
        name="sync-alt"
        size={25}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 70,
    right: 20,
  },
});
