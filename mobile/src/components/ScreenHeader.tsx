// Native
import { Center, Heading } from 'native-base'

type Props = {
  title: string
}

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg="gray.600" pb={6} pt={16}>
      <Heading
        color="gray.200"
        fontSize="xl"
        fontFamily="heading"
        textTransform="uppercase"
      >
        {title}
      </Heading>
    </Center>
  )
}
