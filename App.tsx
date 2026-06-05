import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ProgressProvider } from './src/data/ProgressContext';
import { Colors } from './src/theme/colors';
import { RootStackParamList, MainTabParamList } from './src/types';

import HomeScreen from './src/screens/HomeScreen';
import ModulesScreen from './src/screens/ModulesScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import GlossaryScreen from './src/screens/GlossaryScreen';
import ChatScreen from './src/screens/ChatScreen';
import ModuleLessonsScreen from './src/screens/ModuleLessonsScreen';
import LessonScreen from './src/screens/LessonScreen';
import QuizScreen from './src/screens/QuizScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const TAB_ICONS: Record<string, { icon: string; label: string }> = {
  Home:     { icon: '🏠', label: 'Home' },
  Modules:  { icon: '📚', label: 'Modules' },
  Progress: { icon: '📊', label: 'Progress' },
  Glossary: { icon: '📖', label: 'Glossary' },
  Chat:     { icon: '🤖', label: 'ImmunoBot' },
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Text style={{ fontSize: focused ? 22 : 19, opacity: focused ? 1 : 0.45 }}>
            {TAB_ICONS[route.name].icon}
          </Text>
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ fontSize: 10, color, fontWeight: focused ? '800' : '500', marginTop: -2 }}>
            {TAB_ICONS[route.name].label}
          </Text>
        ),
        tabBarActiveTintColor: Colors.electric,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: {
          backgroundColor: Colors.bgCard,
          borderTopColor: Colors.border,
          height: 84,
          paddingBottom: 20,
          paddingTop: 8,
        },
      })}
    >
      <Tab.Screen name="Home"     component={HomeScreen} />
      <Tab.Screen name="Modules"  component={ModulesScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Glossary" component={GlossaryScreen} />
      <Tab.Screen name="Chat"     component={ChatScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ProgressProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen
              name="ModuleLessons"
              component={ModuleLessonsScreen}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="Lesson"
              component={LessonScreen}
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name="Quiz"
              component={QuizScreen}
              options={{ animation: 'slide_from_bottom' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProgressProvider>
    </SafeAreaProvider>
  );
}
