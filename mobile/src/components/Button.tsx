// Native
import {
  Box,
  Button as NativeBaseButton,
  IButtonProps,
  Text,
} from 'native-base'

// Interfaces
type Props = IButtonProps & {
  title: string
}

export function Button({ title, ...props }: Props) {
  return (
    <Box bg="gray.600" p={4} mt={6} rounded="md">
      <NativeBaseButton
        w="full"
        h={14}
        bg="green.700"
        rounded="md"
        _pressed={{
          bg: 'green.500',
        }}
        {...props}
      >
        <Text color="gray.100" fontFamily="heading" fontSize="md">
          {title}
        </Text>
      </NativeBaseButton>
    </Box>
  )
}
