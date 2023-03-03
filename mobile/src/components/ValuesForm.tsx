// Native
import { useState } from 'react'
import { VStack } from 'native-base'
// Components
import { Rating } from '@components/Rating'

export function ValuesForm() {
  const options = ['Atendimento', 'Preço', 'Qualidade', 'Relacionamento']
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

  // function handleSubmitValues() {
  //   setValues(values)
  //   console.log(values)
  // }

  console.log(values)

  return (
    <VStack flex={1} justifyContent="space-between" p={2} rounded="md">
      {options.map((option) => (
        <Rating
          key={option}
          label={option}
          value={values[option]}
          onChange={(value) => handleChangeValue(option, value)}
        />
      ))}
    </VStack>
  )
}
