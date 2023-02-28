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
import { THEME } from './src/theme'
// Components
import { Loading } from '@components/Loading'
// Routes
import { Routes } from '@routes/index'

export default function App() {
  const fontLoaded = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  )
}
