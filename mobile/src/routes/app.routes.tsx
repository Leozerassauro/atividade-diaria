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
import { Icon, useTheme } from 'native-base'
import { Entypo } from '@expo/vector-icons'

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
    </Navigator>
  )
}
