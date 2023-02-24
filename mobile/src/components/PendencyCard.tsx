// Native
import { useState } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Heading, HStack, Icon, Skeleton, Text, VStack } from 'native-base'
// Assets
import { Entypo } from '@expo/vector-icons'
import WarningSvg from '@assets/warning.svg'

type Props = TouchableOpacityProps

export function PendencyCard({ ...rest }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <TouchableOpacity {...rest}>
      {isLoading ? (
        <Skeleton
          h={16}
          rounded="md"
          startColor="gray.600"
          endColor="gray.400"
          mb={3}
        />
      ) : (
        <HStack
          bg="gray.500"
          alignItems="center"
          p={2}
          px={4}
          rounded="md"
          mb={3}
          borderLeftWidth={8}
          borderLeftColor="red.500"
        >
          <WarningSvg width={26} height={26} />
          <VStack flex={1} ml={4}>
            <Heading fontSize="lg" color="gray.200">
              Visita #01
            </Heading>
            <Text fontSize="sm" color="gray.300" mt={1} numberOfLines={1}>
              Cliente
            </Text>
          </VStack>
          <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
        </HStack>
      )}
    </TouchableOpacity>
  )
}
