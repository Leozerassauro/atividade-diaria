// Native
import { useState } from 'react'
import { Alert } from 'react-native'
import { Icon, Pressable, Text, VStack } from 'native-base'
// Components
import { Input } from '@components/Input'
import { Checkbox } from '@components/Checkbox'
// Assets
import { Entypo } from '@expo/vector-icons'

export function ClientForm() {
  const [checked, setChecked] = useState(false)
  const [client, setClient] = useState('')
  const [searchClient, setSearchClient] = useState('')
  const [results, setResults] = useState<{ id: number; name: string }[]>([])
  const [showResults, setShowResults] = useState(false)

  function search(query: string) {
    const clients = [
      { id: 1100, name: 'Cervejaria 01' },
      { id: 2101, name: 'BrewShop 01' },
      { id: 3103, name: 'Cervejaria 02' },
      { id: 4104, name: 'Cervejaria 03' },
      { id: 5105, name: 'BrewShop 02' },
      { id: 6106, name: 'CraftBeer 01' },
      { id: 7107, name: 'CraftBeer 02' },
      { id: 8108, name: 'Cervejaria 04' },
      { id: 9109, name: 'BrewShop 03' },
      { id: 10010, name: 'CraftBeer 03' },
    ].filter(
      (client) =>
        client.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        client.id.toString().includes(query),
    )

    return clients
  }

  function handleSearchClient(query: string) {
    setSearchClient(query)
    setShowResults(false)
  }

  function handleClientSelect(item: any) {
    setSearchClient(item.name)
    setResults([])
    setShowResults(false)
  }

  function handleSearchButtonPress() {
    setResults(search(searchClient))
    setShowResults(true)
  }

  function renderResults() {
    return results.map((item) => (
      <Pressable
        key={item.id}
        py={2}
        px={4}
        mb={1}
        zIndex={999}
        bg="gray.500"
        rounded="md"
        borderWidth={1}
        borderColor="gray.400"
        _pressed={{
          borderColor: 'green.500',
          borderWidth: 1,
        }}
        onPress={() => handleClientSelect(item)}
      >
        <Text color="gray.200">{item.name}</Text>
      </Pressable>
    ))
  }

  console.log(searchClient)
  console.log(client)

  return (
    <VStack flex={1} p={2} bg="gray.600" rounded="md">
      <Input
        textAlignVertical="center"
        mt={6}
        mb={2}
        bg="gray.700"
        placeholder="Código ou nome do cliente"
        onChangeText={handleSearchClient}
        value={searchClient}
        isDisabled={checked}
        _disabled={{
          value: '',
        }}
        InputRightElement={
          <Pressable
            bg="gray.600"
            p={2}
            mr={4}
            rounded="md"
            borderColor="gray.400"
            borderWidth={1}
            _pressed={{
              borderColor: 'green.500',
              borderWidth: 1,
            }}
            isDisabled={checked}
            onPress={handleSearchButtonPress}
          >
            <Icon as={Entypo} name="magnifying-glass" color="gray.300" />
          </Pressable>
        }
      />
      {results.length > 0 && renderResults()}

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
  )
}
