import { useState } from 'react'
import { Text, HStack, Slider, ISliderProps } from 'native-base'

type Props = ISliderProps & {
  label: string
  value: number
  onChange: (value: number) => void
}

export function Rating({ label, onChange, ...rest }: Props) {
  const [onChangeValue, setOnChangeValue] = useState(0)

  function handleValueChange(newValue: number) {
    setOnChangeValue(newValue)
    onChange(newValue)
  }

  return (
    <HStack justifyContent="space-between" alignItems="center" mb={4}>
      <Text color="gray.200" fontSize="md">
        {label}
      </Text>
      <HStack>
        <Slider
          aria-label={label}
          colorScheme="green"
          minValue={0}
          maxValue={5}
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
