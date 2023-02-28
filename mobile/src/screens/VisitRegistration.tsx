// Native
import { Box, VStack } from 'native-base'
// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { DatePicker } from '@components/DatePicker'

export function VisitRegistration() {
  return (
    <VStack>
      <ScreenHeader title="registro de visita" />
      <Box p={8}>
        <DatePicker />
      </Box>
    </VStack>
  )
}
