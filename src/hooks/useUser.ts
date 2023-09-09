import { useLocalStorage } from './useLocalStorage'

export const useUser = () => {
  const { store, setStore, clearStore } = useLocalStorage<UserTypes>('user')

  return {
    user: store,
    setUser: setStore,
    removeUser: clearStore,
  }
}
