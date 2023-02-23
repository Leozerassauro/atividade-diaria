// Native
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// Screens
import { Home } from '@screens/Home'
import { History } from '@screens/History'
import { Report } from '@screens/Report'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="report" component={Report} />
    </Navigator>
  )
}
