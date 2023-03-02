// Native
import { useMemo, useState } from 'react'
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
// Assets
import { Entypo } from '@expo/vector-icons'

// Interfaces
type Props = {
  clientName: string
  location: {
    address: string
    city: string
    state: string
  }
  status: string
  size: string
  nextAction: string[]
  values: string
  decision: string
  observation: string
}

export function HistoryCard({
  clientName,
  location,
  status,
  size,
  nextAction,
  values,
  decision,
  observation,
}: Props) {
  const isLoading = useMemo(() => false, [])
  const [showCard, setShowCard] = useState(false)
  const [card] = useState([
    {
      label: 'Endereço',
      value: `${location.address} - ${location.city} - ${location.state}`,
    },
    {
      label: 'Status',
      value: status,
    },
    {
      label: 'Tamanho',
      value: size,
    },
    {
      label: 'Próxima Ação',
      value: `${nextAction}`,
    },
    {
      label: 'Valores',
      value: values,
    },
    {
      label: 'Decisão',
      value: decision,
    },
    {
      label: 'Observações',
      value: observation,
    },
  ])

  const handleToggleCard = () => {
    setShowCard(!showCard)
  }

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
        <Pressable
          p={3}
          mb={4}
          flex={1}
          bg="gray.600"
          rounded="md"
          overflow="hidden"
          borderColor="gray.400"
          borderWidth={1}
          _pressed={{
            borderColor: 'green.500',
            borderWidth: 1,
          }}
          onPress={handleToggleCard}
        >
          <HStack flex={1} alignItems="center" justifyContent="space-between">
            <HStack flex={1} justifyContent="space-between">
              <Heading
                color="gray.200"
                fontSize="md"
                textTransform="capitalize"
              >
                {clientName}
              </Heading>
              <Icon
                as={Entypo}
                name={showCard ? 'chevron-up' : 'chevron-down'}
              />
            </HStack>
          </HStack>
          {showCard &&
            card.map((item, index) => (
              <Box key={index}>
                <Text
                  textTransform="capitalize"
                  fontFamily="body"
                  fontWeight="bold"
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
        </Pressable>
      )}
    </>
  )
}
