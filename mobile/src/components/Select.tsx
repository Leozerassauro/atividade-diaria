// Native
import React, { useState } from 'react'
import { Center, Modal, Text, Button, Input, Box } from 'native-base'
import { useForm, Controller } from 'react-hook-form'

type Props = {
  setItOpen: boolean
}

export function Select({ setItOpen = false }: Props) {
  const [modalVisible, setModalVisible] = useState(setItOpen)
  const { control, handleSubmit } = useForm({})

  const quoteOptions = [
    { id: 1, name: 'Lúpulos' },
    { id: 2, name: 'Maltes' },
    { id: 3, name: 'Leveduras' },
    { id: 4, name: 'Enzimas' },
    { id: 5, name: 'Latas' },
    { id: 6, name: 'Clarificantes' },
    { id: 7, name: 'Outros' },
  ]

  const handleOpenModal = () => {
    setModalVisible(!modalVisible)
  }

  function handleModalSubmit(data: any) {
    setModalVisible(!modalVisible)
  }

  function ModalInput() {
    return quoteOptions.map((item) => (
      <Box key={item.id}>
        <Text
          color="gray.200"
          fontFamily="heading"
          fontSize="sm"
          position="relative"
          zIndex={999}
          top={2}
          left={2}
        >
          {item.name}
        </Text>
        <Controller
          control={control}
          name={item.id.toString()}
          render={({ field: { onChange } }) => (
            <Input
              h={10}
              bg="gray.500"
              rounded="md"
              fontSize="sm"
              color="gray.100"
              fontFamily="body"
              placeholderTextColor="gray.300"
              borderWidth={1}
              borderColor="gray.400"
              _focus={{
                bg: 'gray.400',
                borderWidth: 1,
                borderColor: 'green.500',
              }}
              onChangeText={onChange}
            />
          )}
        />
      </Box>
    ))
  }

  return (
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
        <Modal.Body>{ModalInput()}</Modal.Body>
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
              onPress={handleSubmit(handleModalSubmit)}
            >
              <Text color="gray.100" fontFamily="heading" fontSize="md">
                Salvar
              </Text>
            </Button>
          </Center>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
