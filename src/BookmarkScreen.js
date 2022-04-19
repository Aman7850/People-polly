import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LottieView from 'lottie-react-native';

const BookmarkScreen = () => {
    const navigation = useNavigation();
    const Tabs = createMaterialBottomTabNavigator();
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(async() => {
         
        }, 8000);
      }, []);
    
      if(isLoading){
        return(
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <LottieView source={require('./empty.json')} autoPlay loop duration={5000}/>
          </View>
        )
        }

    return (
        <View></View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#01021c',
     
    },
    Touch: {
        width : '50%',
        alignItems: 'center',
        marginTop: '5%'
    }
  });
export default BookmarkScreen;
