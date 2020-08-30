import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';

const Serveys = () => {
  const INJECTEDJAVASCRIPT =
    "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=5, maximum-scale=0.7, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";
  return (
    <WebView
      source={{ uri: '#' }}
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
const Complaints = () => {
  const INJECTEDJAVASCRIPT =
    "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=5, maximum-scale=0.7, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";
  return (
    <WebView
      source={{
        uri: 'http://codeforpalestine.ps/complaints_and_suggestions.php',
      }}
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

const Essential = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://drive.google.com/drive/folders/1y_GH5q5qHGPhrHqpKVbIbTo0NTaMoPqy'
          )
        }
        style={styles.year}>
        <Text style={styles.yearName}>Google Drive</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Serveys')}
        style={styles.year}>
        <Text style={styles.yearName}>Serveys</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Complaints')}
        style={styles.year}>
        <Text style={styles.yearName}>Complaints & Suggestions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://codeforpalestine.slack.com')}
        style={styles.year}>
        <Text style={styles.yearName}>Slack Channel</Text>
      </TouchableOpacity>
    </View>
  );
};

const DashboardStack = createStackNavigator();

export default function ExternalLinks() {
  return (
    <DashboardStack.Navigator mode="modal" headerMode="none">
      <DashboardStack.Screen name="Essential" component={Essential} />
      <DashboardStack.Screen name="Serveys" component={Serveys} />
      <DashboardStack.Screen name="Complaints" component={Complaints} />
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
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
