// Native
import { Text, Icon, HStack } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
// Assets
import { Entypo } from '@expo/vector-icons'

// Interfaces
type Props = TouchableOpacityProps & {
  title: string
  hasIcon?: boolean
}

export function PageTitles({ title, hasIcon, ...rest }: Props) {
  return (
    <HStack p={4} mb={6} bg="gray.600" rounded="md" alignItems="center">
      {hasIcon && (
        <TouchableOpacity {...rest}>
          <Icon
            as={Entypo}
            name="chevron-thin-left"
            color="green.500"
            size={6}
          />
        </TouchableOpacity>
      )}
      {hasIcon ? (
        <Text
          flex={1}
          textAlign="center"
          color="gray.200"
          fontSize="xl"
          fontWeight="bold"
          position="relative"
          right={2}
        >
          {title}
        </Text>
      ) : (
        <Text
          flex={1}
          textAlign="center"
          color="gray.200"
          fontSize="xl"
          fontWeight="bold"
        >
          {title}
        </Text>
      )}
    </HStack>
  )
}
