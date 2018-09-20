import React from "react";
import { StyleSheet, Text, View } from "react-native";

import EventForm from "./EventForm";
import EventList from "./EventList";
import { createStackNavigator } from "react-navigation";

export default createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "list of events"
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add an event"
    })
  }
});
