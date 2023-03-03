// Native
import { useState } from 'react'
import { Alert } from 'react-native'
import {
  ScrollView,
  TextArea,
  VStack,
  Button as NativeButton,
  Text,
  Box,
  Icon,
  HStack,
  Pressable,
} from 'native-base'
// Components
import { Button } from '@components/Button'
import { PageTitles } from '@components/PageTitles'
// Assets
import { Entypo } from '@expo/vector-icons'

export function ObservationsForm() {
  const [observation, setObservation] = useState('')
  const [observations, setObservations] = useState<string[]>([])

  function handleAddTextLine() {
    if (!observation) {
      return Alert.alert(
        'Campo vazio',
        'Digite alguma coisa antes de adicionar a lista',
      )
    }
    setObservations((prevState) => [...prevState, observation])
    setObservation('')
  }

  function handleDeleteTextLine(text: string) {
    return Alert.alert(
      'Remover essa observação?',
      `Tem certeza de que quer remover essa observação?`,
      [
        {
          text: 'Sim',
          onPress: () =>
            setObservations((prevState) =>
              prevState.filter((observation) => observation !== text),
            ),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    )
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} p={8}>
        <PageTitles title="Observações Gerais" hasIcon />
        <VStack flex={1} bg="gray.600" rounded="md" p={4}>
          <TextArea
            autoCompleteType=""
            value={observation}
            onChangeText={setObservation}
            h={40}
            fontSize={16}
            placeholderTextColor="gray.300"
            color="gray.200"
            bg="gray.700"
            borderWidth={0}
            _focus={{
              bg: 'gray.400',
              borderWidth: 1,
              borderColor: 'green.500',
            }}
            returnKeyType="send"
          />
          <Box alignItems="flex-end">
            <NativeButton
              w={20}
              p={2}
              position="relative"
              bottom={12}
              right={2}
              bg="green.700"
              rounded="md"
              _pressed={{
                bg: 'green.500',
              }}
              onPress={() => handleAddTextLine()}
            >
              <Text color="gray.200">Adicionar</Text>
            </NativeButton>
          </Box>

          {observations.map((observation, index) => (
            <HStack key={index} alignItems="center" mb={2}>
              <Icon
                as={Entypo}
                name="controller-record"
                color="green.700"
                size={3}
                mr={2}
              />

              <Text flex={1} color="gray.200" fontFamily="body" fontSize="sm">
                {observation}
              </Text>
              <Pressable
                p={2}
                bg="gray.700"
                rounded="md"
                ml={2}
                borderColor="gray.400"
                borderWidth={1}
                _pressed={{
                  borderColor: 'red.500',
                  borderWidth: 1,
                }}
                onPress={() => handleDeleteTextLine(observation)}
              >
                <Icon as={Entypo} name="trash" color="gray.200" size={3} />
              </Pressable>
            </HStack>
          ))}
        </VStack>
        <Button title="Próximo" />
      </VStack>
    </ScrollView>
  )
}
