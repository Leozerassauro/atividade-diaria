// Native
import { useEffect, useState } from 'react'
import { Icon, Pressable } from 'native-base'
// Maps
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from 'expo-location'
// Assets
import { Entypo } from '@expo/vector-icons'

export function Location() {
  const [location, setLocation] = useState<LocationObject | null>(null)
  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentPosition = await getCurrentPositionAsync()
      setLocation(currentPosition)
      console.log(currentPosition)
    }
  }

  // useEffect(() => {
  //   requestLocationPermissions()
  // }, [])

  return (
    <Pressable
      bg="green.700"
      w={14}
      h={14}
      rounded="full"
      alignItems="center"
      justifyContent="center"
      _pressed={{
        bg: 'green.500',
      }}
      onPress={requestLocationPermissions}
    >
      <Icon as={Entypo} name="location" color="gray.200" size={6} />
    </Pressable>
  )
}
