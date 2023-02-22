/* eslint-disable camelcase */
// Native
import { NativeBaseProvider, Heading, Center } from 'native-base'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
// Components
import { Loading } from '@components/Loading'

export default function App() {
  const fontLoaded = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  })
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? (
        <Center flex={1}>
          <Heading>Hello World!</Heading>
        </Center>
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  )
}
