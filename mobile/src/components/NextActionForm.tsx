// Native
import { useState } from 'react'
import { Alert } from 'react-native'
import { ScrollView, VStack } from 'native-base'
// Components
import { Checkbox } from '@components/Checkbox'
import { PageTitles } from '@components/PageTitles'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function NextActionForm() {
  const [checked, setChecked] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [otherOption, setOtherOption] = useState('')
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
    }
  }

  function handleSubmitActions() {
    try {
      if (selectedOptions.length === 0 && otherOption === '') {
        return Alert.alert(
          'Ações não informadas',
          'Informe pelo menos uma ação para continuar.',
        )
      }

      const nextActions = checked
        ? [...selectedOptions, otherOption]
        : selectedOptions
      console.log(nextActions)
      setSelectedOptions([])
      setOtherOption('')
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Alguma coisa deu errado o tamanho')
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} p={8}>
        <PageTitles title="Próxima ação" hasIcon />
        <VStack flex={1} bg="gray.600" p={8} rounded="md">
          <VStack flex={1} justifyContent="space-between">
            {multipleOptions.map((option, index) => (
              <Checkbox
                value=""
                key={option}
                title={option}
                isChecked={selectedOptions.includes(index)}
                onChange={() => handleToggleOption(index)}
              />
            ))}
            <Checkbox
              value="7"
              title="Outro"
              onChange={() => setChecked(!checked)}
            />
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
        </VStack>
        <Button title="Próximo" onPress={handleSubmitActions} />
      </VStack>
    </ScrollView>
  )
}
