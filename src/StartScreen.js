import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon, Button } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';
 
const StartScreen = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}> 
              <Text style = {{fontSize: 30, fontWeight: 'bold', alignSelf: 'center', color: 'black', marginTop: '5%'}}>People Polly</Text>

                <View style = {{flex: 2, marginBottom: 10}}>
                    <Card style = {{borderRadius: 40, marginTop: '40%', backgroundColor: '#01021c', padding: 10, shadowOffset: { width: 10, height: 1 },shadowOpacity: 0.8,shadowRadius: 1,elevation:10,}}>

                        <View style={{borderRadius: 20, backgroundColor: 'grey', width: '70%', height: '45%', alignSelf: 'center', marginTop: '-40%'}}>
                            <Swiper style={styles.wrapper} showsButtons={false}>
                                <View style={styles.slide1}>
                                <Text style={styles.text}>Hello Swiper</Text>
                                </View>
                                <View style={styles.slide2}>
                                <Text style={styles.text}>Beautiful</Text>
                                </View>
                                <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                                </View>
                            </Swiper>
                        </View>

                            <Text style = {{fontSize:28, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', color: 'white', marginTop: '12%'}}>Grow your insight with inspiring news</Text>
                            <Text style = {{fontSize:13, alignSelf: 'center', textAlign: 'center', color: 'white', marginTop: '20%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </Text>

                            <Animatable.View  animation = "fadeInLeft" delay={1000}>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate('LoginScreen')}>
                                <LinearGradient colors={['#8594F5', '#756EF9', '#396AED']} style = {{width: '90%', borderWidth: 0, borderColor: 'transparent', borderRadius: 10, marginTop: '25%', alignSelf: 'center', backgroundColor: '#4287f5', padding : 20}} >
                                    
                                        <View style ={{flexDirection: 'row'}}>
                                            <Text style = {{fontSize: 18, fontWeight: 'bold', textAlign: 'center', fontWeight: '800', color: 'white'}}>GET STARTED</Text>
                                            <Icon name= 'chevron-right' type= 'font-awesome' size= {18} color= 'white' style = {{marginLeft: '60%', marginTop: 5}}/>
                                            </View>
                                    
                                    </LinearGradient>
                                </TouchableWithoutFeedback>
                            </Animatable.View>
                    </Card>
                    
                </View>
        </View>
                
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#f3f3f6',
     padding: 10
    },
    Touch: {
        marginTop: '20%', 
        alignSelf: 'center'
    },
    wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 10
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 10
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 10
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    
  }
  });
export default StartScreen;
