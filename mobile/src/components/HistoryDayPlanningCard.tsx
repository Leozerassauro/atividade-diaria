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
}

export function HistoryDayPlanningCard({
  clientName,
  location,
  date,
  period,
  activity,
  visitType,
}: Props) {
  const [isLoading] = useState(false)
  const data = [
    {
      label: 'Endereço',
      value: `${location.address}, ${location.city}, ${location.state}`,
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
      value: activity,
    },
    {
      label: 'Tipo',
      value: visitType,
    },
  ]

  return (
    <>
      {isLoading ? (
        <Skeleton
          h={20}
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
              <Pressable bg="gray.700" p={2} rounded="md">
                <Icon as={Entypo} name="edit" color="#F7F15A" />
              </Pressable>
            </HStack>
            {data.map((item, index) => (
              <>
                <Text
                  textTransform="capitalize"
                  fontFamily="body"
                  fontWeight="bold"
                  color="gray.200"
                >
                  {item.label}:
                </Text>
                <Text
                  key={index}
                  color="gray.300"
                  fontFamily="body"
                  fontSize="sm"
                  numberOfLines={2}
                  mb={2}
                  pl={1}
                >
                  {item.value}
                </Text>
              </>
            ))}
          </VStack>
        </HStack>
      )}
    </>
  )
}
