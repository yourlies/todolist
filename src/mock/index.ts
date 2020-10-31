export class TypeStorage<T extends object>  {
  removeItem<K extends keyof T>(key: K) {
    localStorage.removeItem(key as string)
  }
  selectItem<K extends keyof T>(key: K): T[K] | null {
    const data = localStorage.getItem(key as string)
    if (data) {
      return JSON.parse(data)
    } else {
      return null
    }
  }
  updateItem<K extends keyof T>(key: K, value: T[K]) {
    const data = JSON.stringify(value)
    localStorage.setItem(key as string, data)
  }
}