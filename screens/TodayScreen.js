import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function TodayScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.screenTitleContainer}>
          <Text style={styles.screenTitleText}>Today's Menu</Text>
          <Text style={styles.date}>2/25/2020</Text>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.dayContainer}>
          <Text style={styles.mealName}>Dinner</Text>
          <Text style={styles.menuItemText}><Ionicons name="ios-arrow-forward" size={20} style={{ color:"blue" }}></Ionicons> Hamburglers</Text>
          <Text style={styles.menuItemText}><Ionicons name="ios-arrow-forward" size={20} style={{ color:"blue" }}></Ionicons> Fries</Text>
          <Text style={styles.menuItemText}><Ionicons name="ios-arrow-forward" size={20} style={{ color:"blue" }}></Ionicons> Salad</Text>
        </View>
        <View></View>
      </ScrollView>

    </View>
  );
}

TodayScreen.navigationOptions = {
  header: null,
};

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  screenTitleContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  screenTitleText: {
    fontSize: 18,
    color: '#000077',
  },
  dayContainer: {
    margin: 10,
    padding: 5,
  },
  menuItemText: {
    fontSize: 18,
  },
  mealName: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#0000cc',
    marginBottom: 3
  },
  date: {
    fontSize: 18,
    color: "#2e78b7"
  }
});
