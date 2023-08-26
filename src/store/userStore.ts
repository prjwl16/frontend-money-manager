import { create } from 'zustand'

const useUserStore = create<UserStoreState>((set) => ({
  userData: null,
  setUserData: (newUser) => set(() => ({ userData: newUser })),
  removeUserData: () => set(() => ({ userData: null })),
}))

export default useUserStore
