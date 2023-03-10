// Native
import { useState } from 'react'
import { VStack, Image, Center, ScrollView, Icon, Pressable } from 'native-base'
// import { useNavigation } from '@react-navigation/native'
// Form Validations
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// Components
import { Input } from '@components/Input'
import { Button } from '@components/Button'
// Routes
// import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
// Assets
import { Entypo } from '@expo/vector-icons'
import Logo from '@assets/logo.png'
import BackgroundImg from '@assets/background2.png'

type FormDataProps = {
  user: string
  password: string
}

const signInSchema = yup.object({
  user: yup.string().required('Informe o usuário'),
  password: yup.string().required('Informe a senha'),
})

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  // const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  })

  function handleSignIn({ user, password }: FormDataProps) {
    // navigation.navigate('signIn')
  }

  function handleShowPassword() {
    setShowPassword(!showPassword)
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

          <Controller
            control={control}
            name="user"
            render={({ field: { onChange } }) => (
              <Input
                bg="gray.700"
                mb={8}
                placeholder="Usuário"
                autoCapitalize="none"
                InputLeftElement={
                  <Icon as={Entypo} name="user" size={4} ml={4} />
                }
                onChangeText={onChange}
                errorMessage={errors.user?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                bg="gray.700"
                mb={8}
                placeholder="Senha"
                InputLeftElement={
                  <Icon as={Entypo} name="lock" size={4} ml={4} />
                }
                InputRightElement={
                  <Pressable onPress={handleShowPassword}>
                    {!showPassword ? (
                      <Icon as={Entypo} name="eye" size={4} mr={4} />
                    ) : (
                      <Icon as={Entypo} name="eye-with-line" size={4} mr={4} />
                    )}
                  </Pressable>
                }
                secureTextEntry={!showPassword}
                returnKeyType="send"
                onSubmitEditing={handleSubmit(handleSignIn)}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button title="Entrar" mt={8} onPress={handleSubmit(handleSignIn)} />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
