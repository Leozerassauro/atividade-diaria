// Native
import { useState } from 'react'
// import { Alert } from 'react-native'
import { Box, Center, Icon, Text, VStack } from 'native-base'
// Components
import { Checkbox } from '@components/Checkbox'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
// Assets
import { Entypo } from '@expo/vector-icons'

export function NextActionForm() {
  const [checked, setChecked] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [otherOption, setOtherOption] = useState('')

  const quoteOptions = [
    { id: 1, name: 'Lúpulo' },
    { id: 2, name: 'Maltes' },
    { id: 3, name: 'Levedura' },
    { id: 4, name: 'Enzima' },
    { id: 5, name: 'Latas' },
    { id: 6, name: 'Clarificante' },
    { id: 7, name: 'Outros' },
  ]

  const multipleOptions = [
    'Cotar',
    'Revisitar',
    'Fazer Proposta',
    'Enviar Info Com/Tec',
    'Enviar Amostra',
  ]

  function handleToggleOption(optionIndex: number) {
    if (selectedOptions.includes(optionIndex)) {
      setSelectedOptions((prevState) =>
        prevState.filter((option) => option !== optionIndex),
      )
    } else {
      setSelectedOptions((prevState) => [...prevState, optionIndex])
      setSelectedOption(multipleOptions[optionIndex])
    }
  }

  console.log(selectedOptions, otherOption)

  return (
    <VStack flex={1} p={4} justifyContent="space-between">
      {multipleOptions.map((option, index) => (
        <Box key={option}>
          <Checkbox
            value=""
            title={option}
            isChecked={selectedOptions.includes(index)}
            onChange={() => handleToggleOption(index)}
            mb={4}
          />
          {selectedOptions.includes(index) && option === 'Cotar' && <Select />}
          {selectedOptions.includes(index) && option === 'Revisitar' && (
            <Box>
              {quoteOptions.map((option, index) => (
                <>
                  <Text key={index} color="gray.200">
                    {option.name}
                  </Text>
                  <Input bg="gray.700" />
                </>
              ))}
            </Box>
          )}
        </Box>
      ))}
      <Checkbox value="7" title="Outro" onChange={() => setChecked(!checked)} />
      {checked && (
        <Input
          bg="gray.700"
          placeholder="Próxima ação"
          mt={8}
          value={otherOption}
          onChangeText={setOtherOption}
        />
      )}
    </VStack>
  )
}
