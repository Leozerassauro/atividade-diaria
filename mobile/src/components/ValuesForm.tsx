// Native
import { useEffect, useState } from 'react'
import { VStack } from 'native-base'
// Components
import { Rating } from '@components/Rating'

type Props = {
  onIsCompletelyFilled: (value: boolean) => void
}

export function ValuesForm({ onIsCompletelyFilled }: Props) {
  const [isFilled, setIsFilled] = useState(false)
  const options = ['Atendimento', 'Preço', 'Qualidade', 'Relacionamento']
  const [values, setValues] = useState<{ [key: string]: number }>({
    Atendimento: 0,
    Preço: 0,
    Qualidade: 0,
    Relacionamento: 0,
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
          onChange={(value) => handleChangeValue(option, value)}
        />
      ))}
    </VStack>
  )
}
