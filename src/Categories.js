import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, FlatList, ActivityIndicator,  View, Image, ScrollView, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
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

const Categories = () => {
    const navigation = useNavigation();
    const Tabs = createMaterialBottomTabNavigator();
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    setTimeout(async() => {
    fetch('http://pp-api.wooshelf.com/news/cat_api/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }, 8000);
  }, []);

  if(isLoading){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView source={require('./62961-loading.json')} autoPlay loop duration={5000}/>
      </View>
    )
    }

    return (
        <View style={styles.container}>
        {isLoading ? <Text>Loading...</Text> : 
          ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
              <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.slug}</Text>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: '600', textAlign: 'center', paddingBottom: 10}}>Categories:</Text>
              <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (

                <View style={{padding: 10}}>
                    
                    <Card style={{marginTop: 10, padding: 15, borderRadius: 30}}>
                      <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}} key="{item.name}">{item.name}</Text>
                      <Text style={{fontSize: 15, fontWeight: '400', color: 'blue', width: '70%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    </Card>
                    
              </View>
                )}
              />
            </View>
           
          )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
     backgroundColor: 'skyblue',
     
    },
    
  });
export default Categories;
