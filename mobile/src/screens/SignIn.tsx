// Native
import { VStack, Image } from 'native-base'
// Components
import { Input } from '@components/Input'
import { Button } from '@components/Button'
// Assets
import Logo from '@assets/logo.png'
import BackgroundImg from '@assets/background.png'

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700" p={10}>
      <Image
        source={BackgroundImg}
        alt="Imagem com produtos da empresa LNF"
        resizeMode="contain"
        position="absolute"
      />
      <VStack flex={1} justifyContent="center" alignItems="center">
        <Image source={Logo} alt="Imagem do logo da empresa LNF" mb={10} />
        <Input
          bg="gray.700"
          placeholder="Digite o usuário"
          mb={8}
          autoCapitalize="none"
        />
        <Input
          bg="gray.700"
          placeholder="Digite a senha"
          mb={16}
          secureTextEntry
          returnKeyType="send"
        />
        <Button title="Entrar" />
      </VStack>
    </VStack>
  )
}
