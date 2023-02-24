// Native
import { Text, Pressable, IPressableProps } from 'native-base'

type Props = IPressableProps & {
  title: string
}

export function NavHome({ title, ...rest }: Props) {
  return (
    <Pressable
      w={40}
      h={16}
      mt={5}
      mr={2}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      _pressed={{
        borderColor: 'green.500',
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        color="gray.200"
        textAlign="center"
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {title}
      </Text>
    </Pressable>
  )
}
