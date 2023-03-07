// Native
import { useState } from 'react'
import {
  Heading,
  HStack,
  VStack,
  Text,
  Skeleton,
  Icon,
  Pressable,
  Box,
} from 'native-base'
import { Entypo } from '@expo/vector-icons'

type Props = {
  clientName: string
  location: {
    address: string
    city: string
    state: string
  }
  date: string
  period: string
  activity: string[]
  visitType: string
  onDelete: () => void
}

export function HistoryDayPlanningCard({
  clientName,
  location,
  date,
  period,
  activity,
  visitType,
  onDelete,
}: Props) {
  const [isLoading] = useState(false)
  const [card] = useState([
    {
      label: 'Endereço',
      value: `${location.address} - ${location.city} - ${location.state}`,
    },
    {
      label: 'Data',
      value: date,
    },
    {
      label: 'Período',
      value: period,
    },
    {
      label: 'Atividade',
      value: `${activity}`,
    },
    {
      label: 'Tipo',
      value: visitType,
    },
  ])

  return (
    <>
      {isLoading ? (
        <Skeleton
          h={80}
          rounded="md"
          startColor="gray.600"
          endColor="gray.400"
          mb={3}
        />
      ) : (
        <HStack p={6} mb={5} bg="gray.600" rounded="md">
          <VStack flex={1}>
            <HStack
              flex={1}
              justifyContent="space-between"
              alignItems="center"
              mb={4}
            >
              <Heading
                color="gray.200"
                fontSize="lg"
                textTransform="capitalize"
                fontFamily="heading"
              >
                {clientName}
              </Heading>
              <HStack>
                <Pressable
                  bg="gray.700"
                  borderColor="gray.400"
                  borderWidth={1}
                  p={2}
                  mr={2}
                  rounded="md"
                  _pressed={{
                    borderColor: 'green.500',
                    borderWidth: 1,
                  }}
                >
                  <Icon as={Entypo} name="edit" color="gray.200" />
                </Pressable>
                <Pressable
                  bg="gray.700"
                  borderColor="gray.400"
                  borderWidth={1}
                  p={2}
                  rounded="md"
                  _pressed={{
                    borderColor: 'red.500',
                    borderWidth: 1,
                  }}
                  onPress={onDelete}
                >
                  <Icon as={Entypo} name="trash" color="gray.200" />
                </Pressable>
              </HStack>
            </HStack>
            {card.map((item, index) => (
              <Box key={index}>
                <Text
                  textTransform="capitalize"
                  fontFamily="heading"
                  color="gray.200"
                >
                  {item.label}:
                </Text>
                <Text
                  color="gray.300"
                  fontFamily="body"
                  fontSize="sm"
                  numberOfLines={2}
                  mb={2}
                  pl={1}
                >
                  {item.value.split(',').join(', ')}
                </Text>
              </Box>
            ))}
          </VStack>
        </HStack>
      )}
    </>
  )
}
