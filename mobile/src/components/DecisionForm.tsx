// Native
import { useState } from 'react'
import {
  ScrollView,
  VStack,
  Button as AddButton,
  Text,
  Center,
  Icon,
  Pressable,
  Box,
} from 'native-base'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// Components
import { Input } from '@components/Input'
import { Fields } from '@components/Fields'
import { Button } from '@components/Button'

import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Entypo } from '@expo/vector-icons'
import { DeleteModal } from './DeleteModal'

type FormProps = {
  responsible: string
  jobRole: string
  phone: string
  email: string
}

export function DecisionForm() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const [indexToDelete, setIndexToDelete] = useState(0)
  const [forms, setForms] = useState<FormProps[]>([
    { responsible: '', jobRole: '', phone: '', email: '' },
  ])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const handleOpenDeleteModal = (index: number) => {
    setIndexToDelete(index)
    setIsDeleteModalOpen(true)
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }

  function handleAddDecisions() {
    try {
      forms.forEach((form) => {
        if (!form.responsible || !form.jobRole || !form.phone || !form.email) {
          return Alert.alert(
            'Campos não preenchidos',
            'Preencha todos os campos para continuar',
          )
        } else {
          return (
            Alert.alert(
              'Cadastro adicionado com sucesso!',
              'Você registrou a visita com sucesso',
            ),
            navigation.navigate('home'),
            setForms([{ responsible: '', jobRole: '', phone: '', email: '' }])
          )
        }
      })
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Alguma coisa deu errado com a busca de clientes')
    }
  }

  const handleAddForm = () => {
    setForms([...forms, { responsible: '', jobRole: '', phone: '', email: '' }])
  }

  function handleDeleteForm(index: number) {
    setForms((prevState) => prevState.filter((_, i) => i !== index))
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

  console.log(forms)

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} p={8}>
        <Fields title="Tomada de decisão" hasIcon />

        {forms.map((form, index) => (
          <>
            <DeleteModal
              title="Deletar formulário"
              isOpen={isDeleteModalOpen}
              onClose={() => handleCloseDeleteModal()}
              onDelete={() => handleDeleteForm(indexToDelete)}
            />
            <VStack
              key={index}
              flex={1}
              bg="gray.600"
              px={8}
              rounded="md"
              marginTop={index > 0 ? 4 : 0}
            >
              <Box alignItems="flex-end">
                <Pressable mb={4} onPress={() => handleOpenDeleteModal(index)}>
                  <Icon
                    as={Entypo}
                    name="circle-with-cross"
                    color="gray.200"
                    position="relative"
                    top={2}
                    left={6}
                  />
                </Pressable>
              </Box>
              <VStack>
                <Input
                  value={form.responsible}
                  onChangeText={(value) =>
                    handleFormChange(index, 'responsible', value)
                  }
                  placeholder="Digite o nome do responsável"
                  bg="gray.700"
                  mb={4}
                  returnKeyType="next"
                />

                <Input
                  value={form.jobRole}
                  onChangeText={(value) =>
                    handleFormChange(index, 'jobRole', value)
                  }
                  placeholder="Digite o cargo"
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
                  placeholder="Digite o celular"
                  bg="gray.700"
                  mb={4}
                  returnKeyType="next"
                />

                <Input
                  value={form.email}
                  onChangeText={(value) =>
                    handleFormChange(index, 'email', value)
                  }
                  placeholder="Digite o email"
                  bg="gray.700"
                  mb={4}
                  returnKeyType="done"
                />
              </VStack>
            </VStack>
          </>
        ))}
        <Center mb={2}>
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
        <Button title="Salvar" onPress={handleAddDecisions} />
      </VStack>
    </ScrollView>
  )
}

// type FormDataProps = {
//   responsible: string;
//   charge: string;
//   phone: number;
//   email: string;
// }

// export function DecisionForm() {
//   const navigation = useNavigation();
//   const { control, handleSubmit } = useForm<FormDataProps>();

//   function handleAddDecisions(data : FormDataProps) {
//     console.log(data);
//   }

//   function handleNext() {
//     navigation.navigate('home')
//   }

//   function handleBack() {
//     navigation.navigate('valuesForm')
//   }

//   return (
//     <VStack flex={1}>
//       <ScreenHeader title='registro da visita' />
//       <VStack flex={1} p={8}>
//         <Fields title="Tomada de decisão" hasIcon onPress={handleBack} />
//         <VStack flex={1} bg="gray.600" p={8} rounded="md">
//           <VStack flex={1} justifyContent="space-between">
//             <Controller
//               control={control}
//               name="responsible"
//               render={({ field: { onChange } }) => (
//                 <Input
//                   onChangeText={onChange}
//                   placeholder='Digite o nome do responsável'
//                   bg="gray.700"
//                 />
//               )}
//             />
//             <Controller
//               control={control}
//               name="charge"
//               render={({ field: { onChange } }) => (
//                 <Input
//                   onChangeText={onChange}
//                   placeholder='Digite o cargo'
//                   bg="gray.700"
//                 />
//               )}
//             />
//             <Controller
//               control={control}
//               name="phone"
//               render={({ field: { onChange } }) => (
//                 <Input
//                   keyboardType="numeric"
//                   onChangeText={onChange}
//                   placeholder='Digite o celular'
//                   bg="gray.700"
//                 />
//               )}
//             />

//             <Controller
//               control={control}
//               name="email"
//               render={({ field: { onChange } }) => (
//                 <Input
//                   onChangeText={onChange}
//                   placeholder='Digite o email'
//                   bg="gray.700" />
//               )}
//             />
//           </VStack>
//         </VStack>
//         <Button title='Salvar' onPress={handleSubmit(handleAddDecisions)} />
//       </VStack>
//     </VStack>
//   )
// }
