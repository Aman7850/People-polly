import React from 'react';
import {Text, StyleSheet, View, Image, ScrollView, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer,  useNavigation, useIsFocused } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from './LoginScreen';
import SignUp from './SignUp';
import StartScreen from './StartScreen';

const RootStack = createStackNavigator();

function TabRoutes() {

    const isFocused = useIsFocused();
    
      return (
          <View style = {styles.container}>
          <Animatable.Text style = {{fontSize: 30, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center', color: 'black', marginTop: '10%'}} animation = "bounceIn" delay={500}>Thinky</Animatable.Text>
          <Tab.Navigator screenOptions={{ tabBarIndicatorStyle: {backgroundColor: 'transparent'}, swipeEnabled: (false), tabBarStyle: { backgroundColor: '#01021c'}, tabBarLabelStyle: { fontSize: 18, color: '#fff', fontWeight: 'bold'}, gestureEnabled: false}} style = {{borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: '30%'}}>
        
          <Tab.Screen name="Login" component={LoginScreen}/>
          <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator>
        </View>
      );
    }

const RootStackScreen = ({navigation}) => (
  
    <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="StartScreen" component={StartScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen name="SignUp" component={SignUp} />
    </RootStack.Navigator>
);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff2fa',
      padding: 10
    },
    
  });
const Tab = createMaterialTopTabNavigator();
export default RootStackScreen;