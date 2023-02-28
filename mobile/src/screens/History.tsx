// Native
import { useState } from 'react'
import { VStack, SectionList, Heading } from 'native-base'
// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'
import { EmptyList } from '@components/EmptyList'

export function History() {
  const [visits] = useState([
    {
      title: '22/02/2023',
      data: [
        {
          id: 1,
          title: 'Visita 01',
          clientName: 'Cliente 01',
        },
        {
          id: 2,
          title: 'Visita 02',
          clientName: 'Cliente 02',
        },
        {
          id: 3,
          title: 'Visita 03',
          clientName: 'Cliente 03',
        },
      ],
    },
    {
      title: '24/02/2023',
      data: [
        {
          id: 4,
          title: 'Visita 01',
          clientName: 'Cliente 01',
        },
      ],
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Visitas" />

      <SectionList
        sections={visits}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <HistoryCard title={item.title} clientName={item.clientName} />
        )}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
            fontFamily="heading"
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          visits.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <EmptyList title="Não há visitas registradas." />
        )}
      />
    </VStack>
  )
}
