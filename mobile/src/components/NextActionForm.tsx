// Native
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
// import { Alert } from 'react-native'
import { Box, Center, Icon, Text, VStack } from 'native-base'
// Components
import { Checkbox } from '@components/Checkbox'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
// Assets
import { Entypo } from '@expo/vector-icons'

export function NextActionForm() {
  const { control } = useForm()

  return (
    <VStack flex={1} p={4}>
      <Controller
        control={control}
        name="quote"
        render={({ field: { onChange, value } }) => (
          <>
            <Checkbox
              value=""
              title="Cotar"
              my={2}
              isChecked={value}
              onChange={(nextValue) => {
                onChange(nextValue)
              }}
            />
            {value && <Select setItOpen={true} />}
          </>
        )}
      />
      <Controller
        control={control}
        name="revisit"
        render={({ field: { onChange, value } }) => (
          <>
            <Checkbox
              value=""
              title="Revisitar"
              my={2}
              isChecked={value}
              onChange={(nextValue) => onChange(nextValue)}
            />
            {value && <Input bg="gray.700" mb={4} placeholder="Data" />}
          </>
        )}
      />
      <Controller
        control={control}
        name="proposal"
        render={({ field: { onChange, value } }) => (
          <>
            <Checkbox
              value=""
              title="Fazer Proposta"
              my={2}
              isChecked={value}
              onChange={(nextValue) => onChange(nextValue)}
            />
            {value && <Input bg="gray.700" mb={4} placeholder="Proposta" />}
          </>
        )}
      />
      <Controller
        control={control}
        name="sendInfo"
        render={({ field: { onChange, value } }) => (
          <>
            <Checkbox
              value=""
              title="Enviar Info Com/Téc"
              my={2}
              isChecked={value}
              onChange={(nextValue) => onChange(nextValue)}
            />
            {value && (
              <Input
                bg="gray.700"
                mb={4}
                placeholder="Info Comercial / Técnica"
              />
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="sendSample"
        render={({ field: { onChange, value } }) => (
          <>
            <Checkbox
              value=""
              title="Enviar Amostra"
              my={2}
              isChecked={value}
              onChange={(nextValue) => onChange(nextValue)}
            />
            {value && <Input bg="gray.700" mb={4} placeholder="Amostra" />}
          </>
        )}
      />
      <Controller
        control={control}
        name="other"
        render={({ field: { onChange, value } }) => (
          <>
            <Checkbox
              value=""
              title="Outro"
              my={2}
              isChecked={value}
              onChange={(nextValue) => onChange(nextValue)}
            />
            {value && <Input bg="gray.700" mb={4} placeholder="Outro" />}
          </>
        )}
      />
    </VStack>
  )
}
