import React from 'react'
import {Image, Text, View} from 'react-native'
import {Card} from 'react-native-paper'
import {RFValue} from 'react-native-responsive-fontsize'
import {scale, verticalScale} from 'react-native-size-matters'
import {EmailIcon, LockIcon} from '../../assets/icons'
import ButtonAtom from '../../shared/atom/ButtonAtom'
import InputTextAtom from '../../shared/atom/InputTextAtom'
import {images} from '../../assets/images'
import useLoginViewController from '../../view-controller/useLoginViewController'

const Login = () => {
  const {
    usernameText,
    passwordText,
    onChangeUserNameText,
    onChangePasswordText,
    onLoginClick,
  } = useLoginViewController()

  return (
    <View
      style={{flex: 1, backgroundColor: '#f5f5f5', justifyContent: 'center'}}>
      <View
        style={{
          marginVertical: verticalScale(40),
          marginHorizontal: verticalScale(16),

          borderRadius: 5,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            zIndex: 1,
            top: verticalScale(-20),
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
          <Image
            source={images.login_logo}
            style={{height: verticalScale(50), width: scale(50)}}
            resizeMode="contain"
          />
        </View>
        <View style={{marginVertical: verticalScale(60), alignItems: 'center'}}>
          <Text>LOGIN</Text>
        </View>
        <View style={{marginHorizontal: scale(16)}}>
          <InputTextAtom
            leftIcon={EmailIcon()}
            placeholder="Email"
            value={usernameText}
            onChangeText={onChangeUserNameText}
          />

          <InputTextAtom
            leftIcon={LockIcon()}
            placeholder="Password"
            secureTextEntry={true}
            value={passwordText}
            onChangeText={onChangePasswordText}
          />

          <ButtonAtom
            title={'LOGIN'}
            titleStyle={{fontSize: RFValue(10)}}
            disabled={false}
            containerStyle={{marginVertical: verticalScale(30)}}
            onPress={onLoginClick}
          />
        </View>
      </View>
    </View>
  )
}

export default Login
