// Native
import { VStack } from 'native-base'
// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { EmptyList } from '@components/EmptyList'

export function Report() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="relatórios" />
      <EmptyList title="Em desenvolvimento" />
    </VStack>
  )
}
