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
import { useEffect, useState } from 'react'

type FormDataProps = {
  decisionMaker: {
    name: string
    jobRole: string
    phone: string
    email: string
  }[]
}

type Props = {
  onIsCompletelyFilled: (value: boolean) => void
}

const decisionMaker = yup.object().shape({
  decisionMaker: yup.array().of(
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

export function DecisionForm({ onIsCompletelyFilled }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(decisionMaker),
    defaultValues: {
      decisionMaker: [{ name: '', jobRole: '', phone: '', email: '' }],
    },
  })
  const [isFilled, setIsFilled] = useState(false)
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'decisionMaker',
  })

  useEffect(() => {
    onIsCompletelyFilled(isFilled)
  }, [isFilled])

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

  function handleFormSubmit({ decisionMaker }: FormDataProps) {
    setIsFilled(true)
    decisionMaker.forEach((item, index) => {})
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
              name={`decisionMaker.${index}.name`}
              render={({ field: { onChange } }) => (
                <Input
                  defaultValue={field.name}
                  onChangeText={onChange}
                  errorMessage={errors.decisionMaker?.[index]?.name?.message}
                  placeholder="Nome do responsável"
                  bg="gray.700"
                  mb={4}
                  returnKeyType="next"
                />
              )}
            />

            <Controller
              key={`jobRole-${index}`}
              control={control}
              name={`decisionMaker.${index}.jobRole`}
              render={({ field: { onChange } }) => (
                <Input
                  defaultValue={field.jobRole}
                  onChangeText={onChange}
                  errorMessage={errors.decisionMaker?.[index]?.jobRole?.message}
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
              name={`decisionMaker.${index}.phone`}
              render={({ field: { onChange, value } }) => (
                <Input
                  defaultValue={field.phone}
                  onChangeText={onChange}
                  errorMessage={errors.decisionMaker?.[index]?.phone?.message}
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
              name={`decisionMaker.${index}.email`}
              render={({ field: { onChange, value } }) => (
                <Input
                  defaultValue={field.email}
                  onChangeText={onChange}
                  errorMessage={errors.decisionMaker?.[index]?.email?.message}
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
