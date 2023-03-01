// Native
import { useState } from 'react'
import { Alert } from 'react-native'
import { Center, Text, VStack, ScrollView } from 'native-base'
// Components
import { Input } from '@components/Input'
import { Fields } from '@components/Fields'
import { Button } from '@components/Button'

export function SizeForm() {
  const [size, setSize] = useState('')

  function handleAddSize() {
    try {
      if (!size.trim()) {
        return Alert.alert(
          'Tamanho não informado',
          'Informe o tamanho da cervejaria',
        )
      }
      console.log(size)
      setSize(size)
      setSize('')
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Alguma coisa deu errado o tamanho')
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} p={8}>
        <Fields title="Tamanho" hasIcon />
        <VStack flex={1} bg="gray.600" p={8} rounded="md">
          <Center flex={1} justifyContent="space-evenly">
            <Input
              bg="gray.700"
              placeholder="Litragem por mês"
              keyboardType="numeric"
              value={size}
              onChangeText={(size) => setSize(size)}
            />
            <Text color="gray.200" fontSize="lg">
              {size} L/mês
            </Text>
          </Center>
        </VStack>
        <Button title="Próximo" onPress={handleAddSize} />
      </VStack>
    </ScrollView>
  )
}
