// Native
import { useState } from 'react'
import { FlatList, Heading, HStack, Text, VStack } from 'native-base'
// Components
import { HomeHeader } from '@components/Header'
import { EmptyList } from '@components/EmptyList'
import { PendencyCard } from '@components/PendencyCard'
import { Button } from '@components/Button'
import { NavHome } from '@components/NavHome'

export function Home() {
  const [pendencies, setPendencies] = useState([''])
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
          keyExtractor={(item) => item}
          renderItem={({ item }) => <PendencyCard />}
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
