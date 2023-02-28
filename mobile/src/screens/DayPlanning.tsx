// Native
import { Center, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
// Components
import { NavButton } from '@components/NavButton'
import { ScreenHeader } from '@components/ScreenHeader'
// Routes
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export function DayPlanning() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleNewDayPlanning() {
    navigation.navigate('newDayPlanning')
  }

  function handleOpenHistoryDayPlanning() {
    navigation.navigate('historyDayPlanning')
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Planejamento do dia" />

      <Center flex={1} p={8}>
        <NavButton
          title="Novo planejamento"
          w="full"
          onPress={handleNewDayPlanning}
        />
        <NavButton
          title="Consultar planejamentos"
          w="full"
          onPress={handleOpenHistoryDayPlanning}
        />
      </Center>
    </VStack>
  )
}
