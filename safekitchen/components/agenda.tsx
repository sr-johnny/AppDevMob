import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

export function Agenda() {
    const [selected, setSelected] = useState("");

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "#0a4b77ff",
          },
        }}
        style={{
          borderWidth: 1,
          borderColor: "#333",
          height: 350,
        }}
        theme={{
          backgroundColor: "#F3F2F8",
          calendarBackground: "#F3F2F8",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#0a4b77ff",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#0a4b77ff",
          dayTextColor: "#2d4150",
          textDisabledColor: "#666",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});