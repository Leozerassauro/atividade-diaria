/* eslint-disable no-redeclare */
// Native
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
// Screens
import { Home } from '@screens/Home'
import { History } from '@screens/History'
import { Report } from '@screens/Report'
// Assets
import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ReportSvg from '@assets/report.svg'
import { useTheme } from 'native-base'

type AppRoutes = {
  home: undefined
  history: undefined
  report: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { colors } = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: 32,
          paddingTop: 24,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={24} height={24} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={24} height={24} />
          ),
        }}
      />
      <Screen
        name="report"
        component={Report}
        options={{
          tabBarIcon: ({ color }) => (
            <ReportSvg fill={color} width={20} height={20} />
          ),
        }}
      />
    </Navigator>
  )
}
