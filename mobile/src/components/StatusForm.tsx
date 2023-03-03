// Native
import { useState } from 'react'
import { Alert } from 'react-native'
import { Box, Center, Radio, Text, VStack } from 'native-base'
// Components
import { PageTitles } from '@components/PageTitles'
import { Button } from '@components/Button'

export function StatusForm() {
  const [status, setStatus] = useState('')

  async function handleSubmitStatus() {
    try {
      if (!status) {
        return Alert.alert(
          'Status não informado',
          'Informe o status do cliente',
        )
      }
      console.log(status)
      setStatus(status)
      setStatus('')
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Alguma coisa deu errado com a seleção de status')
    }
  }

  return (
    <VStack flex={1}>
      <VStack flex={1} p={8}>
        <PageTitles title="Status" hasIcon />
        <VStack flex={1} bg="gray.600" p={8} rounded="md">
          <Center flex={1} justifyContent="space-evenly">
            <Radio.Group
              name="myRadioGroup"
              value={status}
              onChange={(nextValue) => {
                setStatus(nextValue)
              }}
            >
              <Box mb={12}>
                <Radio value="cliente" my={1} colorScheme="green" bg="gray.700">
                  <Text color="gray.200" fontSize="md">
                    Cliente
                  </Text>
                </Radio>
              </Box>
              <Radio
                value="Não cliente"
                my={1}
                colorScheme="green"
                bg="gray.700"
              >
                <Text color="gray.200" fontSize="md">
                  Não cliente
                </Text>
              </Radio>
            </Radio.Group>
          </Center>
        </VStack>
        <Button title="Próximo" onPress={handleSubmitStatus} />
      </VStack>
    </VStack>
  )
}
