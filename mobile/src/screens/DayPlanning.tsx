// Native
import { Center, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
// Components
import { NavHome } from '@components/NavHome'
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
        <NavHome
          title="Novo planejamento"
          w="full"
          onPress={handleNewDayPlanning}
        />
        <NavHome
          title="Consultar planejamentos"
          w="full"
          onPress={handleOpenHistoryDayPlanning}
        />
      </Center>
    </VStack>
  )
}
