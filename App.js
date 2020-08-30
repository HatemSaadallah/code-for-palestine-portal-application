import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// You can import from local files
import Header from './components/Header';
import Main from './components/Main';
import Sessions from './components/Sessions';
import Schedule from './components/Schedule';
import ExternalLinks from './components/ExternalLinks';
import StudentsList from './components/StudentsList';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header style={{ aspectRatio: 2 / 3 }} />
      <Tab.Navigator
        activeColor="#fff"
        inactiveColor="#fff"
        barStyle={{ backgroundColor: '#95C14C' }}>
        <Tab.Screen
          name="Main"
          options={{
            tabBarLabel: 'Main',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          component={Main}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Sessions',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="laptop" color={color} size={24} />
            ),
          }}
          name="Sessions"
          component={Sessions}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'External Links',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="link-variant" color={color} size={26} />
            ),
          }}
          name="External Links"
          component={ExternalLinks}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="clock-outline" color={color} size={26} />
            ),
          }}
          name="Schedule"
          component={Schedule}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Students\' List',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="school" color={color} size={26} />
            ),
          }}
          name="Students' List"
          component={StudentsList}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
