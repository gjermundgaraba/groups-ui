import {
  type AlertProps,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@/atoms/chakra-components'

export const Notify = (p: AlertProps) => {
  return (
    <Alert
      variant={p.variant || 'left-accent'}
      status={p.status || 'info'}
      borderRadius="sm"
    >
      <AlertIcon />
      <AlertTitle sx={{ fontWeight: 'bold' }}>{p.title}</AlertTitle>
      <AlertDescription>{p.children}</AlertDescription>
    </Alert>
  )
}
