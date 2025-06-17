import {View, Text} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {styles} from "./styles";

export default function OnBoardingScreen(){
    return(
       <View style = {{flex: 1, backgroundColor: '#ffffff'}}>
        <Swiper
                activeDotStyle = {styles.activeStyle}
                >
            </Swiper>
       </View> 
    )
}