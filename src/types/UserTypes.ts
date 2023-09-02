type UserTypes = {
  id: string
  email: string
  role: string
  firstName: string
  lastName: string
  avatar: string
  doneSetup: boolean
}

interface UserStoreState {
  userData: UserTypes | null
  setUserData: (data: UserTypes) => void
  removeUserData: () => void
}
