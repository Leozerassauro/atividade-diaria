// Native
import { useState } from 'react'
import { VStack } from 'native-base'
// Components
import { Rating } from '@components/Rating'
import { Fields } from '@components/Fields'
import { Button } from '@components/Button'

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

  function handleAddValues() {
    setValues(values)
    console.log(values)
  }

  return (
    <VStack flex={1}>
      <VStack flex={1} p={8}>
        <Fields title="Valores" hasIcon />
        <VStack flex={1} bg="gray.600" p={6} rounded="md">
          <VStack flex={1} mt={8} justifyContent="space-between">
            {options.map((option) => (
              <Rating
                key={option}
                label={option}
                value={values[option]}
                onChange={(value) => handleChangeValue(option, value)}
              />
            ))}
          </VStack>
        </VStack>
        <Button title="Próximo" onPress={handleAddValues} />
      </VStack>
    </VStack>
  )
}
