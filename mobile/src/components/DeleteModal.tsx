// Native
import { Button, Heading, HStack, Modal, Text } from 'native-base'

type Props = {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}

export function DeleteModal({ isOpen, onClose, onDelete }: Props) {
  const handleDelete = () => {
    onDelete()
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      _backdrop={{ opacity: 0.9, backgroundColor: 'gray.700' }}
    >
      <Modal.Content>
        <Modal.Header bg="gray.500" borderBottomColor="red.500">
          <Heading fontFamily="heading" fontSize={16} color="gray.100">
            Deletar Planejamento
          </Heading>
        </Modal.Header>
        <Modal.Body bg="gray.500">
          <Text fontFamily="body" color="gray.200">
            Tem certeza que deseja deletar?
          </Text>
        </Modal.Body>
        <Modal.Footer bg="gray.500" borderTopColor="gray.500">
          <HStack space={2}>
            <Button onPress={onClose} colorScheme="gray" variant="ghost">
              <Text fontFamily="body" color="gray.200">
                Cancelar
              </Text>
            </Button>
            <Button onPress={handleDelete} colorScheme="red">
              Deletar
            </Button>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
