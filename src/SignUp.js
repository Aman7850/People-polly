import React, {useState, useEffect} from 'react';
import {Button, Text, StyleSheet, View, Image, ScrollView, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import {  Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AuthContext } from './context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const SignUp = () => {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();
    const { signUp } = React.useContext(AuthContext);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [full_name, setfull_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email_id, setemail_id] = useState('');
    const [date_of_birth, setdate_of_birth] = useState('2012-12-14');
    const [profile_image, setprofile_image] = useState('');
    const [image, setImage] = useState('Default Image.png');
    const [bio, setbio] = useState('');
    const [role, setrole] = useState('');
    const [gender, setgender] = useState('');
    const [results1, setresults1] = useState('');
    const [visible, setvisible] = useState(false);
    const [url, setUrl] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setdate] = useState(
        '0' +
          (new Date().getMonth() + 1) +
          '/' +
          +new Date().getDate() +
          '/' +
          new Date().getFullYear(),
      );

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
        const g = JSON.stringify(date);
        const g_array = g.slice(1, 11).split('-').reverse();
        const d = g_array[0];
        const m = g_array[1];
        const y = g_array[2];
        const togedate = m + '/' + d + '/' + y;
        console.log('A date has been picked:jhvhvhgvhg ', togedate);
        console.log('A date has been picked: ', typeof g);
        setdate(togedate);
        hideDatePicker();
    };

    const ChoosePhotoFromGallery = () => {
    
        ImagePicker.openPicker({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 400,
            cropping: true,
            compressImageQuality: 0.7
          }).then(image => {
            console.log(image);
            setImage(image.path);
          });
      };

    const searchuser = async () => {
        console.log(full_name, last_name, username, password, email_id, date_of_birth, image, bio, role, gender);
        setvisible(true);
        const urls = 'http://pp-api.wooshelf.com/users/';
        const response = await fetch(urls,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          params: {
            
                full_name: full_name,
                last_name: last_name,
                username: username,
                password: password,
                email_id: email_id,
                date_of_birth: date_of_birth,
                image: image,
                bio: bio,
                role: role,
                gender: gender,
               
          },
        }),
      });
    
      
      const json12 = response.json();
      console.log(json12,'I am!')
        // if (json12.result.hasOwnProperty('error')) {
        //   console.log(json12.result.error);
        //   Alert.alert(json12.result.error);
        //   return 0;
        // }
        // console.log(typeof json12.result.users, 'array started');
        // const obj = JSON.parse(json12.result);
        // const results1 = obj.users[0].grant_type;
        // const results2 = obj.users[0].client_id;
        // 
        console.log(response, 'see the result'); 
        // Alert.alert ('Registered Successfully')
   navigation.navigate ('LoginScreen');
}


    return (
        <SafeAreaProvider>
        <View style = {styles.container}>
        <ScrollView>
        <Animatable.View style ={{flex: 3, width: '100%'}} animation = "fadeInDown" delay={1500}>
                <Card style ={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
                    <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: '5%', marginLeft: '5%' }}>Create account</Text>

                    <Text style = {{fontSize: 20, marginTop: '8%', marginLeft: '5%', color: 'black'  }}>Fill form below to register your account</Text>

                    <View style = {{padding: 15}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Full name</Text>
                        <Input
                            placeholder='First Name'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            value = {full_name} onChangeText = {(text) => setfull_name(text)}
                        />
                        
                    </View>

                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Last Name</Text>
                        <Input
                            placeholder='Last Name'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            value = {last_name} onChangeText = {(text) => setlast_name(text)}
                        />
                        
                    </View>

                    
                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Username</Text>
                        <Input
                            placeholder='Username'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            value = {username} onChangeText = {(text) => setusername(text)}
                        />
                        
                    </View>

                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Password</Text>
                        <Input
                            placeholder='Password'
                            leftIcon={{ type: 'font-awesome', name: 'lock' }}
                            value = {password} onChangeText = {(text) => setpassword(text)}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Email Address</Text>
                        <Input
                            placeholder='email@address.com'
                            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                            value = {email_id} onChangeText = {(text) => setemail_id(text)}
                        />
                        
                    </View>

                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Date of Birth</Text>
                        <View style ={{borderRadius: 50}}>
                            <Button title={date} onPress={showDatePicker}/>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                    value = {handleConfirm} onChangeText = {(text) => handleConfirm(text)}
                                />
                        </View>
                    </View>

                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Profile Image</Text>
                        <TouchableWithoutFeedback onPress={ChoosePhotoFromGallery} style={{backgroundColor: 'grey', borderRadius: 20, marginTop: 10, alignSelf: 'center', paddingLeft: 90, paddingRight: 90, paddingTop: 10, paddingBottom: 10}} value = {image} onChangeImage = {(image) => setImage(image)}>
                            <Text style={{fontSize: 16, fontWeight: '800', textAlign: 'center'}}>Choose From Gallery</Text>
                        </TouchableWithoutFeedback>
                        
                    </View>

                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Bio</Text>
                        <Input
                            placeholder='Bio'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            value = {bio} onChangeText = {(text) => setbio(text)}
                        />
                        
                    </View>

                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Role</Text>
                        <Card style = {{backgroundColor: '#e8fcfc'}}>
                        
                        <Picker
                            selectedValue={role}
                            onValueChange={(itemValue, itemIndex) =>
                                setrole(itemValue)
                                
                            } leftIcon={{ type: 'font-awesome', name: 'user-circle' }} value = {role} onChangeText = {(text) => setrole(text)}>
                            <Picker.Item label="CREATOR" value="CREATOR" />
                            <Picker.Item label="MODERATOR" value="MODERATOR" />
                            <Picker.Item label="USERS" value="USERS" />
                        </Picker>
                        </Card>
                        
                    </View>

                    <View style = {{padding: 15, marginTop: '-5%'}}>
                        <Text style = {{fontSize: 15, marginBottom: 10}}>Gender</Text>
                        
                        <Card style = {{backgroundColor: '#e8fcfc'}}>
                        
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue, itemIndex) =>
                                setgender(itemValue)
                                
                            } leftIcon={{ type: 'font-awesome', name: 'transgender-alt' }} value = {gender} onChangeText = {(text) => setgender(text)}>
                            <Picker.Item label="MALE" value="MALE" />
                            <Picker.Item label="FEMALE" value="FEMALE" />
                            <Picker.Item label="OTHER" value="OTHER" />
                        </Picker>
                        </Card>
                    </View>
                    

                    <View style = {{alignItems: 'center'}}>
                        <TouchableOpacity onPress={searchuser}>
                            <Card style ={{width: '90%', paddingTop: 10, paddingBottom: 10, paddingLeft: 100, paddingRight: 100, borderRadius: 10, alignItems: 'center', backgroundColor: '#5a2dfc'}}>
                                <Text style ={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>REGISTER</Text>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <Animatable.View style ={{flexDirection: 'row', marginTop: 15, alignSelf: 'center', marginBottom: '30%', paddingLeft: 30, paddingRight: 30,}} animation = "bounceIn" delay={2000}>
                        <Text style = {{fontSize: 15, textAlign: 'center' }}>By tap Register button you accept terms and privacy this app</Text>
                            
                    </Animatable.View>
                </Card>
            </Animatable.View>
            </ScrollView>
        </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 2,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#01021c',
    //  padding:-20
     
    },
    Touch: {
        width : '50%',
        alignItems: 'center',
        marginTop: '5%'
    }
  });
export default SignUp;
