// Native
import { useEffect, useState } from 'react'
import { VStack } from 'native-base'
// Components
import { Rating } from '@components/Rating'

type Props = {
  onIsCompletelyFilled: (value: boolean) => void
}

export function StatusForm({ onIsCompletelyFilled }: Props) {
  const [isFilled, setIsFilled] = useState(false)
  const options = [
    'Lúpulo',
    'Maltes',
    'Levedura',
    'Enzima',
    'Latas',
    'Clarificante',
    'Outros',
  ]
  const [values, setValues] = useState<{ [key: string]: number }>({
    Lúpulo: 0,
    Maltes: 0,
    Levedura: 0,
    Enzima: 0,
    Latas: 0,
    Clarificante: 0,
    Outros: 0,
  })

  useEffect(() => {
    onIsCompletelyFilled(isFilled)
  }, [isFilled])

  function handleChangeValue(option: string, value: number) {
    setIsFilled(true)
    setValues((prevValues) => ({
      ...prevValues,
      [option]: value,
    }))
  }

  return (
    <VStack>
      {options.map((option) => (
        <Rating
          key={option}
          label={option}
          value={values[option]}
          minValue={0}
          maxValue={100}
          step={5}
          isPercentage
          onChange={(value) => handleChangeValue(option, value)}
        />
      ))}
    </VStack>
  )
}
