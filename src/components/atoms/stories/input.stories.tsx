import type { ReactNode } from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import { AmountInput } from '@/atoms/amount-input'
import { Center, HStack, Stack, Text } from '@/atoms/chakra-components'
import { NumberInput } from '@/atoms/number-input'

export default {
  title: 'Atoms/inputs',
  component: Center,
  argTypes: {},
} as Meta<typeof Center>

const onClick = () => void null

const Label = ({ children, label }: { children: ReactNode; label: string }) => (
  <HStack>
    <Text>{label}</Text>
    {children}
  </HStack>
)

const Template: StoryFn<typeof Center> = () => {
  return (
    <Center flexDir="column">
      <Text mb={4}>(base inputs)</Text>
      <Stack>
        <Label label="AmountInput">
          <AmountInput onMaxClick={onClick} />
        </Label>
        <Label label="NumberInput">
          <NumberInput />
        </Label>
      </Stack>
    </Center>
  )
}

export const Fields = Template.bind({})
Fields.args = {}
