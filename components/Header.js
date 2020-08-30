import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.container}
        source={require('../assets/codeforpalestine.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 24,
    resizeMode: 'contain',
    height: 100,
    marginTop: 30,
  },
});
