// Native
import { useState } from 'react'
import {
  Center,
  HStack,
  Icon,
  Modal,
  Pressable,
  Text,
  Button,
} from 'native-base'

// Assets
import { Entypo } from '@expo/vector-icons'

export function Select() {
  const [modalVisible, setModalVisible] = useState(false)

  const quoteOptions = [
    { id: 1, name: 'Lúpulo' },
    { id: 2, name: 'Maltes' },
    { id: 3, name: 'Levedura' },
    { id: 4, name: 'Enzima' },
    { id: 5, name: 'Latas' },
    { id: 6, name: 'Clarificante' },
    { id: 7, name: 'Outros' },
  ]

  const handleOpenModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <>
      <Pressable
        bg="gray.500"
        p={2}
        mb={6}
        rounded="md"
        borderColor="gray.400"
        borderWidth={1}
        _pressed={{
          borderColor: 'green.500',
          borderWidth: 1,
        }}
        onPress={handleOpenModal}
      >
        <HStack flex={1} justifyContent="space-between" alignItems="center">
          <Text color="gray.200" fontSize={14}>
            Categoria de produtos
          </Text>
          <Icon as={Entypo} name={'popup'} />
        </HStack>
      </Pressable>
      <Modal
        isOpen={modalVisible}
        onClose={handleOpenModal}
        bg="rgba(18, 18, 20, 0.5)"
      >
        <Modal.Content bg="gray.600">
          <Modal.CloseButton
            _pressed={{ bg: 'red.500', _icon: { color: 'white' } }}
          />
          <Modal.Header bg="gray.600" borderColor="green.500">
            <Text color="gray.200" fontFamily="heading" fontSize={16}>
              Categorias
            </Text>
          </Modal.Header>
          <Modal.Body>
            {quoteOptions.map((category, index) => (
              <Pressable
                key={index}
                p={2}
                bg="gray.500"
                borderWidth={1}
                borderColor="gray.400"
                rounded="md"
                mb={2}
                _pressed={{
                  borderColor: 'green.500',
                }}
              >
                <Text color="gray.200" fontFamily="heading" fontSize={14}>
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </Modal.Body>
          <Modal.Footer bg="gray.600" borderColor="green.700">
            <Center flex={1}>
              <Button
                w="50%"
                h={10}
                p={2}
                bg="green.700"
                rounded="md"
                _pressed={{
                  bg: 'green.500',
                }}
              >
                <Text color="gray.100" fontFamily="heading" fontSize="md">
                  Salvar
                </Text>
              </Button>
            </Center>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}
