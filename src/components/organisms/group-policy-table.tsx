import type { UIGroupPolicyInfo } from 'types'
import { formatDate } from 'util/date'

import {
  formatPercentage,
  formatThreshold,
  formatVotingPeriod,
  isThresholdPolicy,
} from 'api/policy.utils'
import { useBreakpointValue } from 'hooks/chakra-hooks'

import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@/atoms'
import { TableTitlebar } from '@/molecules/table-titlebar'
import { Truncate } from '@/molecules/truncate'

import { useBalances } from '../../hooks/use-query'
import { getGroupPolicyMetadata } from '../../util/validation'

export const GroupPolicyTable = ({ policies }: { policies: UIGroupPolicyInfo[] }) => {
  const tailSize = useBreakpointValue({ base: 4, sm: 6, md: 25, lg: 35, xl: 100 })
  const policiesWithBalance = policies.map((p) => {
    let balance = '0 $MPWR'
    const { data: balances } = useBalances(p?.address)
    if (balances) {
      for (const b of balances) {
        if (b.denom === 'umpwr') {
          const amount = parseInt(b.amount)
          balance = `${(amount / 1000000).toLocaleString('en-GB')} $MPWR`
        }
      }
    }

    let name = ''
    const metadata = getGroupPolicyMetadata(p.metadata)
    if (metadata) {
      name = metadata.name || ''
    }

    return { ...p, balance, name }
  })
  if (!policies) return null
  return (
    <TableContainer>
      <TableTitlebar title="Group Policy" />
      <Table variant="striped" size="lg">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Created</Th>
            <Th>Voting window</Th>
            <Th>Voting config</Th>
            <Th>Balance</Th>
            <Th>Address</Th>
          </Tr>
        </Thead>
        <Tbody>
          {policiesWithBalance.map((p, index) => (
            <Tr key={index}>
              <Td>{p.name}</Td>
              <Td>{formatDate(p.createdAt)}</Td>
              <Td>{formatVotingPeriod(p)}</Td>
              <Td>
                {isThresholdPolicy(p.decisionPolicy)
                  ? formatThreshold(p)
                  : formatPercentage(p)}
              </Td>
              <Td>{p.balance}</Td>
              <Td>
                <Truncate clickToCopy tailLength={tailSize} text={p.address} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
