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

// Components
import { DeleteModal } from './DeleteModal'

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
  onDelete: (clientName: string) => void
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
  ])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true)
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }

  const handleDeleteCard = () => {
    console.log(`Deletou a visita com o cliente ${clientName}`)
    setIsDeleteModalOpen(false)
  }

  return (
    <>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onDelete={handleDeleteCard}
      />
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
              <HStack>
                <Pressable bg="gray.700" p={2} mr={2} rounded="md">
                  <Icon as={Entypo} name="edit" color="gray.200" />
                </Pressable>
                <Pressable
                  bg="gray.700"
                  p={2}
                  rounded="md"
                  onPress={handleOpenDeleteModal}
                >
                  <Icon as={Entypo} name="trash" color="gray.200" />
                </Pressable>
              </HStack>
            </HStack>
            {card.map((item, index) => (
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
