// Native
import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

// Interfaces
type Props = IButtonProps & {
  title: string
}

export function Button({ title, ...props }: Props) {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg="green.700"
      rounded="md"
      alignItems="center"
      justifyContent="center"
      _pressed={{
        bg: 'green.500',
      }}
      {...props}
    >
      <Text color="gray.100" fontFamily="heading" fontSize="md">
        {title}
      </Text>
    </NativeBaseButton>
  )
}
