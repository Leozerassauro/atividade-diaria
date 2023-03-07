// Native
import { useState } from 'react'
// import { Alert } from 'react-native'
import { Center, Text, VStack } from 'native-base'
// Components
import { Input } from '@components/Input'
import { Checkbox } from '@components/Checkbox'
import { Rating } from './Rating'

export function SizeForm() {
  const [size, setSize] = useState('')
  const [percentage, setPercentage] = useState('')
  const [checked, setChecked] = useState(false)
  const options = ['CraftBeer', 'Preço']
  const [values, setValues] = useState<{ [key: string]: number }>({
    Atendimento: 0,
    Preço: 0,
    Qualidade: 0,
    Relacionamento: 0,
  })

  function handleChangeValue(option: string, value: number) {
    setValues((prevValues) => ({
      ...prevValues,
      [option]: value,
    }))
  }

  // function handleSubmitSize() {
  //   try {
  //     const newSize = checked ? 0 : size
  //     const newPercentage = checked ? 0 : percentage

  //     if (
  //       (isNaN(Number(size)) && !checked) ||
  //       (Number(size) <= 0 && !checked)
  //     ) {
  //       return Alert.alert(
  //         'Tamanho inválido',
  //         'Informe um número válido para o tamanho da cervejaria.',
  //       )
  //     }
  //     if (
  //       (isNaN(Number(percentage)) && !checked) ||
  //       (Number(percentage) <= 0 && !checked)
  //     ) {
  //       return Alert.alert(
  //         'Porcentagem inválida',
  //         'Informe um número válido para porcentagem de cervejas leves.',
  //       )
  //     }
  //     setSize(String(newSize))
  //     setSize('')
  //     setPercentage(String(newPercentage))
  //     setPercentage('')
  //     console.log(newSize)
  //     console.log(newPercentage)
  //   } catch (error) {
  //     console.log(error)
  //     Alert.alert('Ops', 'Alguma coisa deu errado o tamanho')
  //   }
  // }

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
        {/* {options.map((option) => (
          <Rating
            key={option}
            label={option}
            value={values[option]}
            onChange={(value) => handleChangeValue(option, value)}
          />
        ))} */}
        {/* <Input
          bg="gray.700"
          mt={10}
          placeholder="Percentual de cervejas leves"
          keyboardType="numeric"
          isDisabled={checked}
          _disabled={{
            value: '',
          }}
          value={percentage.toString()}
          onChangeText={setPercentage}
        />
        <Text color="gray.200" fontSize="lg" mt={4}>
          {Number(percentage)
            .toFixed(0)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}{' '}
          %
        </Text> */}
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
