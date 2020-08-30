import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Sessions() {
  const INJECTEDJAVASCRIPT =
    "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=5, maximum-scale=0.7, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";
  const resourceType = 'base64';
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri:
            'https://www.docdroid.net/CVuX6lj/sessions-pdf',
        }}
        style={{
          width: '100%',
          height: 300,
        }}
        scrollEnabled
        originWhitelist={['*']}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
