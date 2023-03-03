// Native
import { Center, Text } from 'native-base'

// Interfaces
type Props = {
  title: string
}

export function EmptyList({ title }: Props) {
  return (
    <Center flex={1}>
      <Text color="gray.200">{title}</Text>
    </Center>
  )
}
