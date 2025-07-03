import {View, Text, Image, TouchableOpacity} from 'react-native';
import Button from '@/components/common/button';
import React from 'react';
import AuthContainer from '@/utils/container/auth-container';
import { windowHeight } from '@/themes/app.constant';
import SignInText from '@/components/login/signin.text';
import OTPTextInput from 'react-native-otp-textinput'; // Adjust the path as needed
import styles from '../login/style';
import {style} from '@/Screen/verification/style';
import color from '@/themes/app.colors';
import {external} from '@/styles/external.style';
import { router } from 'expo-router';
import { commonStyles } from '@/styles/common.style';
export default function OtpVerificationScreen(){
    return(
        <AuthContainer
        topSpace = {windowHeight(240)}
        imageShow = {true}
        container ={
            <View>
                <SignInText
                title = {"OTP verification"}
                subtitle = {"Check your phone for the OTP!"}
                />
                <OTPTextInput 
                handleTextChange={(code) => console.log(code)}
                inputCount={6}
                textInputStyle={style.otpTextInput}
                tintColor={color.subtitle}
                autoFocus={false}
                />
                <View style = {[external.mt_30]}>
                    <Button
                    title ="Verify"
                    onPress={()=> router.push("/(tabs)/home")}
                    />
                </View>
                <View style={[external.mb_15]}>
                    <View style = {[external.pt_10, external.Pb_10, 
                        {flexDirection: "row",
                            gap: 5,
                            justifyContent: "center",
                        }
                    ]}>
                        <Text style ={[commonStyles.regularText]}>
                            Not Received yet? 
                        </Text>
                        <TouchableOpacity>
                            <Text style = {[style.signUpText,{color: "#000"}]}>
                                Resend it
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        }

        />
    )
}