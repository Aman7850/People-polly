import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, ImageBackground, useWindowDimensions, ActivityIndicator, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon, Divider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Svg, Path, G } from 'react-native-svg';
import SignUp from './SignUp';
 
const Profile = () => {
    const navigation = useNavigation();
    const Tabs = createMaterialBottomTabNavigator();
    const [isLoading, setLoading] = useState(true);
    const [image, setImage] = useState('Default Image.png');

    useEffect(() => {
        setTimeout(async() => {
          setLoading(false)
        }, 2500);
      }, []);
    
      if(isLoading){
        return(
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" />
          </View>
        )
        }

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <Card style={{backgroundColor: '#c0c4cf', padding: 10, paddingLeft: 10, paddingRight: 10, borderRadius: 10, marginLeft: '3%'}}>
                <Icon name = 'chevron-left' size = {30} color={'black'} style = {{}} />
              </Card>
              <Text style={{fontSize: 24, fontWeight: '700', marginLeft: '20%', marginTop: 10, color: 'black'}}>Profile</Text>

              <Card style={{ padding: 8, borderRadius: 10, marginLeft: '25%', borderWidth: 2, paddingLeft: 25, paddingRight: 25 }}>
                <Icon name = 'ellipsis-v' type = 'font-awesome' size = {30} style = {{}} />
              </Card>
            </View>

            <View style={{padding: 10}}>
            <View style={{marginTop: '2%'}}>
              <Card style={{backgroundColor: '#101245', padding: 15, alignItems: 'center', borderRadius: 20}}>
              <View style={{alignItems: 'center'}}>
              <View style={{borderRadius:230/2, width: 230, height: 230, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderColor: 'grey'}}>
                  <AnimatedCircularProgress
                  size={180}
                  width={8}
                  fill={80}
                  duration={1000}
                  title={'40'}
                  titleColor={'white'}
                  titleStyle={{fontWeight: 'bold'}}
                  rotation={0}
                  tintColor="#3069f0"
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor="#3d5875"></AnimatedCircularProgress>
                  </View>
                </View>
                <View style={{alignItems: 'center', marginBottom: '5%'}}>
                  <Text style={{fontSize: 27, fontWeight: '800', color: 'white', letterSpacing: 1}}>David Kowalski</Text>
                  <Text style={{fontSize: 16, textAlign: 'center', fontWeight: '300', color: 'white'}}>UI/UX Designer</Text>

                  <Text style={{fontSize: 14, textAlign: 'center', color: 'lightgrey', marginTop: 20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </Text>
                </View>
              </Card>
            </View>

            <View style={{marginTop: '2%'}}>
                <Card style={{padding: 18, borderRadius: 20, backgroundColor: '#478cfc'}}>
                  <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 19, fontWeight: '600', color:'white', width: '50%', marginLeft: '5%'}}>Get premium access</Text>
                      <View style={{flexDirection: 'column', marginLeft: '28%', width: '40%'}}>
                        <Text style={{fontSize: 20, fontWeight: '500', color:'white'}}>$120</Text>
                        <Text style={{fontSize: 14, color:'white'}}>/months</Text>
                      </View>
                  </View>
                </Card>
            </View>

            <View style={{marginTop: '2%'}}>
              <Card style={{borderRadius: 20, padding: 15}}>
                <View style={{flexDirection: 'row', marginBottom: '5%', marginTop: '2%'}}>
                  <Icon name = 'clone' type = 'font-awesome' color= {'grey'} size = {20} style = {{marginLeft: '3%'}} />
                  <Text style={{color: 'black', fontSize: 16, fontWeight: '500', marginLeft: 20}}>My Post  </Text>
                  <Text style={{color: 'lightgrey', fontSize: 15}}>45</Text>
                  <Icon name = 'angle-right' type = 'font-awesome' color= {'blue'} size = {20} style = {{marginLeft: '62%'}} />
                </View>
                <Divider width={1}/>

                <View style={{flexDirection: 'row', marginBottom: '5%', marginTop: '6%'}}>
                  <Icon name = 'sign-out' type = 'font-awesome' color= {'red'} size = {25} style = {{marginLeft: '3%'}} />
                  <Text style={{color: 'red', fontSize: 16, fontWeight: '400', marginLeft: 20}}>Logout  </Text>
                  
                </View>
              </Card>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     padding: 10,
     backgroundColor: '#e4e7ed'
    },
    
  });
export default Profile;
