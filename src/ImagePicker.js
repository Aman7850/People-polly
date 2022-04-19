import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Input, Icon } from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function ImagePicker() {
  const [image, setImage] = useState(null);
  const addImage=()=>{};
 
  return (
            <View style={imageUploaderStyles.container}>
                {
                    image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                }
                    
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                            <Icon name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
              

            </View>
   
  );
}

const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:60,
        width:'100%', 
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius: 30,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        top: 0,
        backgroundColor:'lightgrey',
        width:'100%',
        
        
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        marginTop:10
    }
})