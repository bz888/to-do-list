export interface TodoObjType{
  _id: string
  progression: boolean
  description: string
  createdBy: string
  updatedAt: Date
  createdAt: Date
}

export interface userType {
  auth0Id: string
  email: string
  token: string
}

declare global {
  namespace Express {
    interface User {
      // token
      sub: string

      // auth0id
      auth0Id: string
    }
  }
}
