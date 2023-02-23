/* eslint-disable camelcase */
// Native
import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
// Theme

// Components
import { Loading } from '@components/Loading'
import { THEME } from './src/theme'
import { SignIn } from '@screens/SignIn'

export default function App() {
  const fontLoaded = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  )
}
