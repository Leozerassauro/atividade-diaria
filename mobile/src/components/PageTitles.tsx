// Native
import { Text, Icon, HStack, Pressable } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
// Assets
import { Entypo } from '@expo/vector-icons'

// Interfaces
type Props = TouchableOpacityProps & {
  title: string
  onPress: () => void
}

export function PageTitles({ title, onPress, ...rest }: Props) {
  return (
    <Pressable p={4} mb={6} bg="gray.600" rounded="md" alignItems="center">
      <Text
        flex={1}
        textAlign="center"
        color="gray.200"
        fontSize="xl"
        fontWeight="bold"
        onPress={onPress}
      >
        {title}
      </Text>
    </Pressable>
  )
}
