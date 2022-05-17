import { useAuth0 } from '@auth0/auth0-react'
import React, { ReactNode } from 'react'

interface AuxProps {
  children: ReactNode;
}

const isAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

export function IfAuthenticated ({ children }: AuxProps) {
  return isAuthenticated()
    ? <>{ children }</>
    : null
}

export function IfNotAuthenticated ({ children }: AuxProps) {
  return !isAuthenticated()
    ? <>{ children }</>
    : null
}
