// Native
import { Heading, HStack, Icon, VStack } from 'native-base'
// Components
import { Input } from '@components/Input'
import { Button } from '@components/Button'
// Assets
import { Entypo } from '@expo/vector-icons'

export function SignIn() {
  return (
    <VStack
      flex={1}
      bg="gray.700"
      justifyContent="center"
      alignItems="center"
      p={10}
    >
      <HStack mb={20}>
        <Icon as={Entypo} name="pin" color="green.700" size={6} />
        <Heading color="gray.200" ml={2} fontFamily="heading">
          Gestão de visita
        </Heading>
      </HStack>
      <Input
        bg="gray.600"
        placeholder="Digite o usuário"
        mb={8}
        autoCapitalize="none"
      />
      <Input
        bg="gray.600"
        placeholder="Digite a senha"
        mb={16}
        secureTextEntry
        returnKeyType="send"
      />
      <Button title="Entrar" />
    </VStack>
  )
}
