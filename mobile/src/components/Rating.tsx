import { useState } from 'react'
import { Text, HStack, Slider, ISliderProps } from 'native-base'

type Props = ISliderProps & {
  label: string
  value: number
  onChange: (value: number) => void
}

export function Rating({ label, onChange, ...rest }: Props) {
  const [onChangeValue, setOnChangeValue] = useState(0)

  function handleValueChange(value: number) {
    setOnChangeValue(value)
    onChange(value)
  }

  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Text color="gray.200" fontSize="md">
        {label}
      </Text>
      <HStack>
        <Slider
          colorScheme="green"
          minValue={0}
          maxValue={5}
          step={1}
          w={120}
          onChange={handleValueChange}
          {...rest}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Text textAlign="center" color="gray.200" fontSize="md" ml={4}>
          {onChangeValue}
        </Text>
      </HStack>
    </HStack>
  )
}
