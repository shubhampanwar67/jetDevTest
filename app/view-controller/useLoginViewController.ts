import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import {HOME_SCREEN} from '../routes/app-route-labels'
import Toast from '../core/helpers/Toast'
import {useDispatch} from 'react-redux'
import {setUserLoginStatus} from '../store/actions/slice.action'

const useLoginViewController = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [usernameText, setUserNameText] = useState<string>('')
  const [passwordText, setPasswordText] = useState<string>('')

  const onLoginClick = () => {
    if (
      usernameText === 'reactnative@jetdevs.com' &&
      passwordText === 'jetdevs@123'
    ) {
      // @ts-ignore
      dispatch(setUserLoginStatus(true))
      navigation.navigate(HOME_SCREEN)
    } else {
      Toast('Incorrect Username or Password')
    }
  }

  const onChangeUserNameText = (text: string) => {
    setUserNameText(text.toLowerCase())
  }

  const onChangePasswordText = (text: string) => {
    setPasswordText(text)
  }

  return {
    usernameText,
    passwordText,
    onChangeUserNameText,
    onChangePasswordText,
    onLoginClick,
  }
}

export default useLoginViewController
