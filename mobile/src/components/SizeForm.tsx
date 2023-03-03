// Native
import { useState } from 'react'
// import { Alert } from 'react-native'
import { Center, Text, VStack } from 'native-base'
// Components
import { Input } from '@components/Input'
import { Checkbox } from '@components/Checkbox'

export function SizeForm() {
  const [size, setSize] = useState('')
  const [checked, setChecked] = useState(false)

  // function handleSubmitSize() {
  //   try {
  //     const newSize = checked ? 0 : size

  //     if (
  //       (isNaN(Number(size)) && !checked) ||
  //       (Number(size) <= 0 && !checked)
  //     ) {
  //       return Alert.alert(
  //         'Tamanho inválido',
  //         'Informe um número válido para o tamanho da cervejaria.',
  //       )
  //     }
  //     setSize(String(newSize))
  //     setSize('')
  //     console.log(newSize)
  //   } catch (error) {
  //     console.log(error)
  //     Alert.alert('Ops', 'Alguma coisa deu errado o tamanho')
  //   }
  // }
  console.log(size)

  return (
    <VStack flex={1} bg="gray.600" p={2} rounded="md">
      <Center flex={1} justifyContent="space-evenly">
        <Input
          bg="gray.700"
          placeholder="Litragem por mês"
          keyboardType="numeric"
          isDisabled={checked}
          _disabled={{
            value: '',
          }}
          value={size.toString()}
          onChangeText={setSize}
        />
        <Text color="gray.200" fontSize="lg" mt={4}>
          {Number(size)
            .toFixed(0)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}{' '}
          L/mês
        </Text>
        <Checkbox
          value=""
          mt={12}
          onChange={() => setChecked(!checked)}
          title="Não produz cerveja"
        />
      </Center>
    </VStack>
  )
}
