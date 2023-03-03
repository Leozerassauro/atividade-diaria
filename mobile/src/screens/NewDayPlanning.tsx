// Native
import { VStack } from 'native-base'

// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { DatePicker } from '@components/DatePicker'

export function NewDayPlanning() {
  return (
    <VStack>
      <ScreenHeader title="Novo Planejamento do dia" />
      <DatePicker />
    </VStack>
  )
}
