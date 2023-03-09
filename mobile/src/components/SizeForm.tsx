// Native
import { useEffect, useState } from 'react'
// import { Alert } from 'react-native'
import { Center, Text, VStack } from 'native-base'
// Components
import { Input } from '@components/Input'
import { Checkbox } from '@components/Checkbox'
import { Rating } from '@components/Rating'

type Props = {
  onIsCompletelyFilled: (value: boolean) => void
}

export function SizeForm({ onIsCompletelyFilled }: Props) {
  const [size, setSize] = useState('')
  const [percentage, setPercentage] = useState(0)
  const [checked, setChecked] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    onIsCompletelyFilled(isFilled)
  }, [isFilled])

  function handleChangePercentage(percentage: number) {
    setIsFilled(true)
    setPercentage(percentage)
  }

  return (
    <VStack>
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
        <Center mt={12}>
          <Text color="gray.200" fontSize="md" mb={6}>
            Percentagem de cervejas leves
          </Text>
          <Rating
            value={percentage}
            onChange={handleChangePercentage}
            minValue={0}
            maxValue={100}
            step={5}
            isPercentage
            isDisabled={checked}
          />
        </Center>
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
