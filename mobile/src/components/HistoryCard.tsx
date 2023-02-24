// Native
import { Heading, HStack, VStack, Text } from 'native-base'

type Props = {
  title: string
  clientName: string
}

export function HistoryCard({ title, clientName }: Props) {
  return (
    <HStack
      w="full"
      px={5}
      py={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={5}>
        <Heading color="gray.200" fontSize="md" textTransform="capitalize">
          {title}
        </Heading>
        <Text color="gray.300" fontSize="lg" numberOfLines={1}>
          {clientName}
        </Text>
      </VStack>
    </HStack>
  )
}
