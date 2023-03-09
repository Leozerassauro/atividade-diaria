// Native
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
// Form Validations
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// Components
import { Input } from '@components/Input'
// Assets
import { Entypo } from '@expo/vector-icons'

type FormDataProps = {
  servicedBy: {
    name: string
    jobRole: string
    phone: string
    email: string
  }[]
}

const servicedBy = yup.object().shape({
  servicedBy: yup.array().of(
    yup.object().shape({
      name: yup.string(),
      jobRole: yup.string(),
      phone: yup.string(),
      // .matches(
      //   /^[1-9]{2}9?[6-9][0-9]{3}[0-9]{4}$/,
      //   'Digite um número válido',
      // ),
      email: yup.string().email('Digite um email válido'),
    }),
  ),
})

export function ServicedByForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(servicedBy),
    defaultValues: {
      servicedBy: [{ name: '', jobRole: '', phone: '', email: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'servicedBy',
  })

  function handleRemoveForm(index: number) {
    return Alert.alert(
      'Deletar Formulário',
      `Tem certeza que deseja deletar esse formulário?`,
      [
        {
          text: 'Sim',
          onPress: () => remove(index),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    )
  }

  function handleFormSubmit({ servicedBy }: FormDataProps) {
    servicedBy.forEach((item, index) => {
      console.log(`Índice ${index}:`, item)
    })
  }

  return (
    <>
      {fields.map((field, index) => (
        <Box key={index}>
          <Box alignItems="flex-end">
            <Pressable
              mb={4}
              key={`remove-${index}`}
              onPress={() => handleRemoveForm(index)}
            >
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
            <Controller
              key={`name-${index}`}
              control={control}
              name={`servicedBy.${index}.name`}
              render={({ field: { onChange } }) => (
                <Input
                  defaultValue={field.name}
                  onChangeText={onChange}
                  errorMessage={errors.servicedBy?.[index]?.name?.message}
                  placeholder="Nome do atendente"
                  bg="gray.700"
                  mb={4}
                  returnKeyType="next"
                />
              )}
            />

            <Controller
              key={`jobRole-${index}`}
              control={control}
              name={`servicedBy.${index}.jobRole`}
              render={({ field: { onChange } }) => (
                <Input
                  defaultValue={field.jobRole}
                  onChangeText={onChange}
                  errorMessage={errors.servicedBy?.[index]?.jobRole?.message}
                  placeholder="Cargo"
                  bg="gray.700"
                  mb={4}
                  returnKeyType="next"
                />
              )}
            />

            <Controller
              key={`phone-${index}`}
              control={control}
              name={`servicedBy.${index}.phone`}
              render={({ field: { onChange, value } }) => (
                <Input
                  defaultValue={field.phone}
                  onChangeText={onChange}
                  errorMessage={errors.servicedBy?.[index]?.phone?.message}
                  placeholder="Celular"
                  keyboardType="numeric"
                  bg="gray.700"
                  mb={4}
                  returnKeyType="next"
                />
              )}
            />
            <Controller
              key={`email-${index}`}
              control={control}
              name={`servicedBy.${index}.email`}
              render={({ field: { onChange, value } }) => (
                <Input
                  defaultValue={field.email}
                  onChangeText={onChange}
                  errorMessage={errors.servicedBy?.[index]?.email?.message}
                  placeholder="Email"
                  keyboardType="email-address"
                  bg="gray.700"
                  mb={8}
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit(handleFormSubmit)}
                />
              )}
            />
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
          onPress={() =>
            append({ name: '', jobRole: '', phone: '', email: '' })
          }
        >
          <Text color="gray.200">+</Text>
        </AddButton>
      </Center>
    </>
  )
}
