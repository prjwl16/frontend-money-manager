import store from 'storejs'
import { useState } from 'react'

export function useLocalStorage<T>(key: string) {
  const [state, setState] = useState(() => store.get(key) || null)

  const setStore = (data: T) => {
    store.set(key, data)
  }

  const clearStore = () => {
    store.clear()
    setState(null)
  }

  return {
    store: state,
    setStore,
    clearStore,
  }
}
