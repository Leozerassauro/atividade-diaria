// Native
import { useState } from 'react'
import { FlatList, Heading, HStack, Text, VStack } from 'native-base'
// Components
import { HomeHeader } from '@components/HomeHeader'
import { EmptyList } from '@components/EmptyList'
import { PendencyCard } from '@components/PendencyCard'
import { NavHome } from '@components/NavHome'

export function Home() {
  const [pendencies] = useState([
    { id: 1, title: 'Visita #01', content: 'Cliente' },
    { id: 2, title: 'Visita #02', content: 'Cliente, Status' },
    { id: 3, title: 'Visita #03', content: 'Cliente, Tamanho' },
    { id: 4, title: 'Visita #04', content: 'Cliente' },
    { id: 5, title: 'Visita #05', content: 'Cliente, Tamanho' },
    { id: 6, title: 'Visita #06', content: 'Cliente' },
    { id: 7, title: 'Visita #07', content: 'Cliente, Tamanho' },
    { id: 8, title: 'Visita #08', content: 'Cliente' },
    { id: 9, title: 'Visita #09', content: 'Cliente, Tamanho' },
  ])

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack p={8}>
        <NavHome title="registro da visita" />
        <NavHome title="planejamento do dia" />
      </HStack>
      <VStack flex={1} px={8} mt={4}>
        <HStack justifyContent="space-between">
          <Heading color="gray.200" fontSize="md" mb={4}>
            Pendentes
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {pendencies.length}
          </Text>
        </HStack>
        <FlatList
          data={pendencies}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => (
            <PendencyCard title={item.title} content={item.content} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10 }}
          contentContainerStyle={
            pendencies.length === 0 && { flex: 1, justifyContent: 'center' }
          }
          ListEmptyComponent={() => (
            <EmptyList title="Não há cadastros pendentes" />
          )}
        />
      </VStack>
    </VStack>
  )
}
