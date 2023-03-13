// Native
import { useEffect, useState } from 'react'
import { Box, Center, Radio, Text } from 'native-base'

type Props = {
  onIsCompletelyFilled: (value: boolean) => void
}

export function ClientSegmentForm({ onIsCompletelyFilled }: Props) {
  const [isFilled, setIsFilled] = useState(false)
  const [segment, setSegment] = useState('')

  useEffect(() => {
    onIsCompletelyFilled(isFilled)
  }, [isFilled])

  function handleSubmitSegment(nextValue: string) {
    setSegment(nextValue)
    setIsFilled(true)
  }

  return (
    <Center>
      <Radio.Group
        name="myRadioGroup"
        value={segment}
        onChange={handleSubmitSegment}
      >
        <Box justifyContent="space-evenly">
          <Radio value="craft brewery" my={4} colorScheme="green" bg="gray.700">
            <Text color="gray.200" fontSize="md">
              Cervejaria Craft
            </Text>
          </Radio>
          <Radio
            value="regional brewery"
            my={4}
            colorScheme="green"
            bg="gray.700"
          >
            <Text color="gray.200" fontSize="md">
              Cervejaria Regional
            </Text>
          </Radio>
          <Radio value="gypsy brewery" my={4} colorScheme="green" bg="gray.700">
            <Text color="gray.200" fontSize="md">
              Cervejaria Cigana
            </Text>
          </Radio>
          <Radio value="hnk/ambev" my={4} colorScheme="green" bg="gray.700">
            <Text color="gray.200" fontSize="md">
              HNK / AMBEV
            </Text>
          </Radio>
          <Radio value="brewshop" my={4} colorScheme="green" bg="gray.700">
            <Text color="gray.200" fontSize="md">
              Revendedora
            </Text>
          </Radio>
          <Radio value="other" my={4} colorScheme="green" bg="gray.700">
            <Text color="gray.200" fontSize="md">
              Outro
            </Text>
          </Radio>
        </Box>
      </Radio.Group>
    </Center>
  )
}
