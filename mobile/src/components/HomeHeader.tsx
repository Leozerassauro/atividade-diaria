// Native
import { Center, Image } from 'native-base'
// Assets
import Logo from '@assets/logo.png'

export function HomeHeader() {
  return (
    <Center bg="gray.600" pt={16} pb={5} px={8}>
      <Image source={Logo} resizeMode="contain" alt="Logo da empresa LNF" />
    </Center>
  )
}
