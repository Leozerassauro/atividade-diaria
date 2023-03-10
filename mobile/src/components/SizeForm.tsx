// Native
import { useEffect, useState } from 'react'
// import { Alert } from 'react-native'
import { Center, Text, VStack } from 'native-base'
// Components
import { Input } from '@components/Input'
import { Rating } from '@components/Rating'

type Props = {
  onIsCompletelyFilled: (value: boolean) => void
}

export function SizeForm({ onIsCompletelyFilled }: Props) {
  const [size, setSize] = useState('')
  const [percentage, setPercentage] = useState(0)
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
          />
        </Center>
      </Center>
    </VStack>
  )
}
