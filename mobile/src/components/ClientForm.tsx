// Native
import { useState } from 'react'
import { Alert } from 'react-native'
import { Icon, ScrollView, VStack } from 'native-base'
// Components
import { Input } from '@components/Input'
import { Checkbox } from '@components/Checkbox'
import { PageTitles } from '@components/PageTitles'
import { Button } from '@components/Button'
// Assets
import { Entypo } from '@expo/vector-icons'

export function ClientForm() {
  const [checked, setChecked] = useState(false)
  const [client, setClient] = useState('')

  async function handleClientSearch() {
    try {
      setClient(client)
      setClient('')
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Alguma coisa deu errado com a busca de clientes')
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} p={8}>
        <PageTitles title="Cliente" hasIcon />
        <VStack flex={1} bg="gray.600" p={8} rounded="md">
          <Input
            textAlignVertical="center"
            mt={6}
            bg="gray.700"
            placeholder="Código ou nome do cliente"
            onChangeText={setClient}
            value={client}
            isDisabled={checked}
            _disabled={{
              value: '',
            }}
            InputLeftElement={
              <Icon
                as={Entypo}
                name="magnifying-glass"
                ml={4}
                color="gray.300"
              />
            }
          />
          <Checkbox
            value=""
            mt={12}
            onChange={() => setChecked(!checked)}
            title="Não possui cadastro"
          />
          {checked && (
            <Input
              bg="gray.700"
              placeholder="Nome do cliente"
              mt={8}
              onChangeText={setClient}
              value={client}
            />
          )}
        </VStack>
        <Button title="Próximo" onPress={handleClientSearch} />
      </VStack>
    </ScrollView>
  )
}
