// Native
import { useState } from 'react'
import {
  VStack,
  Button as AddButton,
  Text,
  Center,
  Icon,
  Pressable,
  Box,
} from 'native-base'
import { Alert } from 'react-native'
// Components
import { Input } from '@components/Input'
// Assets
import { Entypo } from '@expo/vector-icons'

type FormProps = {
  responsible: string
  jobRole: string
  phone: string
  email: string
}

export function ServicedByForm() {
  const [forms, setForms] = useState<FormProps[]>([
    { responsible: '', jobRole: '', phone: '', email: '' },
  ])

  const handleAddForm = () => {
    setForms([...forms, { responsible: '', jobRole: '', phone: '', email: '' }])
  }

  function handleDeleteForm(index: number) {
    return Alert.alert(
      'Deletar Formulário',
      'Tem certeza que deseja deletar esse formulário?',
      [
        {
          text: 'Sim',
          onPress: () =>
            setForms((prevState) => prevState.filter((_, i) => i !== index)),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    )
  }

  const handleFormChange = (
    index: number,
    field: keyof FormProps,
    value: string,
  ) => {
    const newForms = [...forms]
    newForms[index][field] = value
    setForms(newForms)
  }

  // function handleSubmitDecisions() {
  //   try {
  //     forms.forEach((form) => {
  //       if (!form.responsible || !form.jobRole || !form.phone || !form.email) {
  //         return Alert.alert(
  //           'Campos não preenchidos',
  //           'Preencha todos os campos para continuar',
  //         )
  //       } else {
  //         return (
  //           Alert.alert(
  //             'Cadastro adicionado com sucesso!',
  //             'Você registrou a visita com sucesso',
  //           ),
  //           navigation.navigate('home'),
  //           setForms([{ responsible: '', jobRole: '', phone: '', email: '' }])
  //         )
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error)
  //     Alert.alert('Ops', 'Alguma coisa deu errado com a busca de clientes')
  //   }
  // }

  console.log(forms)

  return (
    <>
      {forms.map((form, index) => (
        <Box key={index}>
          <VStack
            key={index}
            flex={1}
            bg="gray.600"
            px={4}
            rounded="md"
            mt={index > 0 ? 4 : 0}
          >
            <Box alignItems="flex-end">
              <Pressable mb={4} onPress={() => handleDeleteForm(index)}>
                <Icon
                  as={Entypo}
                  name="circle-with-cross"
                  color="gray.200"
                  position="relative"
                  top={2}
                  left={4}
                />
              </Pressable>
            </Box>
            <VStack>
              <Input
                value={form.responsible}
                onChangeText={(value) =>
                  handleFormChange(index, 'responsible', value)
                }
                placeholder="Nome do atendente"
                bg="gray.700"
                mb={4}
                returnKeyType="next"
              />

              <Input
                value={form.jobRole}
                onChangeText={(value) =>
                  handleFormChange(index, 'jobRole', value)
                }
                placeholder="Cargo"
                bg="gray.700"
                mb={4}
                returnKeyType="next"
              />

              <Input
                value={form.phone}
                onChangeText={(value) =>
                  handleFormChange(index, 'phone', value)
                }
                keyboardType="numeric"
                placeholder="Celular"
                bg="gray.700"
                mb={4}
                returnKeyType="next"
              />

              <Input
                value={form.email}
                onChangeText={(value) =>
                  handleFormChange(index, 'email', value)
                }
                placeholder="Email"
                bg="gray.700"
                mb={8}
                returnKeyType="done"
              />
            </VStack>
          </VStack>
        </Box>
      ))}
      <Center mb={4}>
        <AddButton
          position="absolute"
          w={10}
          rounded="full"
          bg="green.700"
          _pressed={{
            bg: 'green.500',
          }}
          onPress={handleAddForm}
        >
          <Text color="gray.200">+</Text>
        </AddButton>
      </Center>
    </>
  )
}
