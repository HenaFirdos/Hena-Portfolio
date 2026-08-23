import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({ children, variant = 'primary', className, ...props }: Props) {
  return (
    <a className={cn('button group', `button-${variant}`, className)} {...props}>
      {children}
    </a>
  )
}
