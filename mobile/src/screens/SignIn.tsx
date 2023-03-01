// Native
import { VStack, Image, Center, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'
// Components
import { Input } from '@components/Input'
import { Button } from '@components/Button'
// Routes
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
// Assets
import Logo from '@assets/logo.png'
import BackgroundImg from '@assets/background.png'

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleSignIn() {
    navigation.navigate('signIn')
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} p={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Imagem com produtos da empresa LNF"
          resizeMode="contain"
          position="absolute"
        />
        <VStack flex={1} justifyContent="center">
          <Center>
            <Image source={Logo} alt="Imagem do logo da empresa LNF" mb={10} />
          </Center>
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
          <Button title="Entrar" onPress={handleSignIn} />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
