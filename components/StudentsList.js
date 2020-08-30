import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';

const Year1 = () => {
  const INJECTEDJAVASCRIPT =
    "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=5, maximum-scale=0.7, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";
  return (
    <WebView
      source={{ uri: 'https://hatemsaadallah.github.io/codeapp/year1' }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      injectedJavaScript={INJECTEDJAVASCRIPT}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};
const Year2 = () => {
  const INJECTEDJAVASCRIPT =
    "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=5, maximum-scale=0.7, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";
  return (
    <WebView
      source={{ uri: 'https://hatemsaadallah.github.io/codeapp/year2' }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      injectedJavaScript={INJECTEDJAVASCRIPT}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};
const Year3 = () => {
  const INJECTEDJAVASCRIPT =
    "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=5, maximum-scale=0.7, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";
  return (
    <WebView
      source={{ uri: 'https://hatemsaadallah.github.io/codeapp/year3' }}
      style={{
        width: '100%',
        height: 300,
        flex: 1,
      }}
      injectedJavaScript={INJECTEDJAVASCRIPT}
      scrollEnabled
      originWhitelist={['*']}
    />
  );
};

const DashboardStack = createStackNavigator();
const Students = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Year1')}
        style={styles.year}>
        <Text style={styles.yearName}>Year 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Year2')}
        style={styles.year}>
        <Text style={styles.yearName}>Year 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Year3')}
        style={styles.year}>
        <Text style={styles.yearName}>Year 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function StudentsList() {
  return (
    <DashboardStack.Navigator mode="modal" headerMode="none">
      <DashboardStack.Screen name="Students" component={Students} />
      <DashboardStack.Screen name="Year1" component={Year1} />
      <DashboardStack.Screen name="Year2" component={Year2} />
      <DashboardStack.Screen name="Year3" component={Year3} />
    </DashboardStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 24,
  },
  year: {
    height: 60,
    width: '100%',
    backgroundColor: '#95afc0',
    margin: 5,
    justifyContent: 'center',
    borderRadius: 15,
  },
  yearName: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
});
