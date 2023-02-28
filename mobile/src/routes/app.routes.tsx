/* eslint-disable no-redeclare */
// Native
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { Icon, useTheme } from 'native-base'
// Screens
import { Home } from '@screens/Home'
import { History } from '@screens/History'
import { Report } from '@screens/Report'
import { DayPlanning } from '@screens/DayPlanning'
import { VisitRegistration } from '@screens/VisitRegistration'
import { NewDayPlanning } from '@screens/NewDayPlanning'
// Assets
import { Entypo } from '@expo/vector-icons'
import { HistoryDayPlanning } from '@screens/HistoryDayPlanning'

type AppRoutes = {
  home: undefined
  history: undefined
  report: undefined
  visitRegistration: undefined
  dayPlanning: undefined
  newDayPlanning: undefined
  historyDayPlanning: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { colors } = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
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
            <Icon as={Entypo} name="home" color={color} size={6} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon as={Entypo} name="back-in-time" color={color} size={6} />
          ),
        }}
      />
      <Screen
        name="report"
        component={Report}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon as={Entypo} name="clipboard" color={color} size={6} />
          ),
        }}
      />
      <Screen
        name="visitRegistration"
        component={VisitRegistration}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="dayPlanning"
        component={DayPlanning}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="newDayPlanning"
        component={NewDayPlanning}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="historyDayPlanning"
        component={HistoryDayPlanning}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  )
}
