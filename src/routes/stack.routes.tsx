import {createStackNavigator} from '@react-navigation/stack';
import { ForgotPasswordForm } from '../screens/ForgotPassword/Form';
import { SignUp } from '../screens/Register/SignUp';
import { SignUpDocuments } from '../screens/Register/SignUpDocuments';
import { SignUpPassword } from '../screens/Register/SignUpPassword';
import { SignUpSelfie } from '../screens/Register/SignUpSelfie';
import { SignUpSelfieCheck } from '../screens/Register/SignUpSelfieCheck';
import { SignIn } from '../screens/SignIn';
import { Welcome } from '../screens/Welcome';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='welcome' component={Welcome}/>
      <Screen name='signin' component={SignIn}/>
      <Screen name='signup' component={SignUp}/>
      <Screen name='signuppass' component={SignUpPassword}/>
      <Screen name='signupselfie' component={SignUpSelfie}/>
      <Screen name='signupselfiecheck' component={SignUpSelfieCheck}/>
      <Screen name='signupdocuments' component={SignUpDocuments}/>
      <Screen name='forgotpassword' component={ForgotPasswordForm}/>
    </Navigator>
  )
}